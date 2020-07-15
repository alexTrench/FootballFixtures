import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function LeagueHistoryNav(props) {
  const leagueData = [
    { compID: 2021, leagueTitle: "Premier League" },
    { compID: 2014, leagueTitle: "La Liga" },
    { compID: 2015, leagueTitle: "Ligue Un" },
    { compID: 2016, leagueTitle: "The ChampionShip" },
    { compID: 2017, leagueTitle: "Liga" },
    { compID: 2018, leagueTitle: "Euro Cup" },
    { compID: 2019, leagueTitle: "Seria A" },
    { compID: 2013, leagueTitle: "Brasillian Seria A" },
  ];

  return (
    <DropdownButton
      title="Previous Winners"
      id="dropdown-idem-button"
      variant="outline-primarys"
    >
      {leagueData.map((element) => (
        <Dropdown.Item
          as="button"
          onClick={() => props.onClickfunction(element.compID)}
          key={element.compID}
        >
          {element.leagueTitle}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default LeagueHistoryNav;
