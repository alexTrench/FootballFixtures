import React from "react";

//prettier-ignore
function Started(props) {
  return (
    <div className="DataList">
      <div key={props.data.fixture_id} className="FixtureHolder">
        {props.data.homeTeam.team_name}{" "}{!props.data.goalsHomeTeam ? 0 : props.data.goalsHomeTeam}
        {" - "}
        {!props.data.goalsAwayTeam ? 0 : props.data.goalsAwayTeam}{" "}{props.data.awayTeam.team_name}{' '}
        {props.data.statusShort} 
      </div>
    </div>
  );
}

export default Started;
