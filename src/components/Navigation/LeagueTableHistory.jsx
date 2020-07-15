import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function LeagueTableHistory(props) {
  const premleagueData = [
    { LeagueID: 524, leagueTitle: "Premier League", year: "2019" },
    { LeagueID: 2, leagueTitle: "Premier League", year: "2018" },
    { LeagueID: 37, leagueTitle: "Premier League", year: "2017" },
    { LeagueID: 56, leagueTitle: "Premier League", year: "2016" },
    { LeagueID: 696, leagueTitle: "Premier League", year: "2015" },
    { LeagueID: 697, leagueTitle: "Premier League", year: "2014" },
  ];

  const championshipLeagueData = [
    { LeagueID: 565, leagueTitle: "Championship", year: "2019" },
    { LeagueID: 3, leagueTitle: "Championship", year: "2018" },
    { LeagueID: 38, leagueTitle: "Championship", year: "2017" },
    { LeagueID: 57, leagueTitle: "Championship", year: "2016" },
    { LeagueID: 1651, leagueTitle: "Championship", year: "2015" },
    { LeagueID: 2055, leagueTitle: "Championship", year: "2014" },
  ];

  return (
    <DropdownButton
      title="Previous League Tables"
      id="dropdown-idem-button"
      variant="outline-primarys"
    >
      {" "}
      <DropdownButton
        title="Premier league"
        id="dropdown-idem-button"
        variant="outline-primarys"
      >
        {premleagueData.map((element) => (
          <Dropdown.Item
            as="button"
            onClick={() => props.onClickfunction(element.LeagueID)}
            key={element.LeagueID}
          >
            {element.leagueTitle} {element.year}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton
        title="Championship"
        id="dropdown-idem-button"
        variant="outline-primarys"
      >
        {championshipLeagueData.map((element) => (
          <Dropdown.Item
            as="button"
            onClick={() => props.onClickfunction(element.LeagueID)}
            key={element.LeagueID}
          >
            {element.leagueTitle} {element.year}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </DropdownButton>
  );
}

export default LeagueTableHistory;
