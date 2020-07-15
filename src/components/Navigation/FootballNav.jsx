import React, { Component } from "react";
import "../../css/NavBar.css";
import SeasonData from "../DataHolders/PremWinners";
import CurrentTeams from "../DataHolders/CurrentTeams";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import LeagueHistoryNav from "./LeagueHistoryNav";
import LeagueTableHistory from "./LeagueTableHistory";
import LeagueTable from "../DataHolders/LeagueTable";
import FixtureData from "../DataHolders/FixtureComponents/Fixtures";
import DateComponent from "../DateSelection/Date";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      type: null,
    };
  }

  async getAPI() {
    const response = await fetch("/api/football/status");
    const responseText = await response.json();

    console.log(responseText);
  }

  async getAllSeasons() {
    const response = await fetch("/api/football/getAllSeasons");
    const responseText = await response.json();

    console.log(responseText);
  }

  async getLeagueTable(leagueID) {
    const response = await fetch(`/api/getSeasons/${leagueID}`);
    const responseText = await response.json();

    this.setState({ data: responseText, type: "currentLeague" });
  }

  async getPreviousWinners(compID) {
    const response = await fetch(`/api/getPreviousWinners/${compID}`);
    const responseText = await response.json();

    this.setState({ data: responseText, type: "historical" });
    console.log(this.state);
  }

  async getFixtures() {
    const response = await fetch(`/api/getFixtures/${2}`);
    const responseText = await response.json();
    console.log(responseText);
  }

  async showFixtures() {
    const response = await fetch(`/api/getFixtureByDate`);
    const responseText = await response.json();
    this.setState({ data: responseText, type: "fixtures" });
    console.log(this.state);
  }

  async getLeagueIds() {
    const response = await fetch(`/api/getLeagueIds`);
    const responseText = await response.json();
    console.log(responseText);
  }

  whichDataToShow = (typeOfData) => {
    switch (typeOfData) {
      case "historical":
        return <SeasonData data={this.state.data}></SeasonData>;
      case "currentTeams":
        return <CurrentTeams data={this.state.data}></CurrentTeams>;
      case "currentLeague":
        return <LeagueTable props={this.state.data}></LeagueTable>;
      case "fixtures":
        return <FixtureData data={this.state.data}></FixtureData>;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <Nav
          className="NavBarDiv"
          style={{ background: "rgba(127, 255, 212, 0.404)" }}
        >
          <Button
            variant="outline-primarys"
            onClick={this.showFixtures.bind(this)}
          >
            Fixtures
          </Button>
          <LeagueTableHistory
            onClickfunction={this.getLeagueTable.bind(this)}
          ></LeagueTableHistory>
        </Nav>
        {this.state.type === "fixtures" ? (
          <DateComponent
            getFixtures={this.showFixtures.bind(this)}
          ></DateComponent>
        ) : null}
        {this.whichDataToShow(this.state.type)}
      </div>
    );
  }
}

export default NavBar;
