import React from "react";
import NotStarted from "./GameNotStarted";
import Started from "./GameStarted";

function FixtureData(props) {
  let previous = -999;
  let current = -9999;

  const IsDifferentLeague = (element) => {
    if (element.league_id !== previous) {
      previous = current;
      return (
        <div className="FixetureDivider">
          {element.league.country} {element.league.name}
        </div>
      );
    }
  };

  const GameProgress = (element) => {
    current = element.league_id;

    switch (element.status) {
      case "Not Started":
        return (
          <div key={element.fixture_id}>
            {IsDifferentLeague(element)}
            <NotStarted
              data={element}
              leagueData={element.league.name}
            ></NotStarted>
          </div>
        );
      case "Match Finished":
        return (
          <div key={element.fixture_id}>
            {IsDifferentLeague(element)}
            <Started data={element}></Started>
          </div>
        );
      default:
        return (
          <div key={element.fixture_id}>
            {IsDifferentLeague(element)}
            <NotStarted data={element}></NotStarted>
          </div>
        );
    }
  };
  return (
    <div className="DataList">
      {props.data.map((element) => GameProgress(element))}
    </div>
  );
}

export default FixtureData;
