import React, { Component } from "react";

class TeamInformation extends Component {
  constructor(props) {
    super(props);

    this.state = { fixture_id: props.data.data.fixture_id };
  }

  async getLineups() {
    const response = await fetch(
      `/api/getFixtureLineup/${this.state.fixture_id}`
    );
    const responseText = await response.json();

    console.log(responseText.api.lineUps);
  }

  componentDidMount() {
    this.getLineups();
  }

  sortLineUps(lineups) {
    lineups[0].startXI.map((element) => {
      console.log(element.player + element.number);
    });
  }

  render() {
    return <div></div>;
  }
}

export default TeamInformation;
