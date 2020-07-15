import React from "react";

function NotStarted(props) {
  return (
    <div className="DataList">
      <div key={props.data.fixture_id} className="FixtureHolder">
        <div>
          {props.data.awayTeam.team_name} {props.data.event_date.slice(11, 16)}{" "}
          {props.data.homeTeam.team_name}
        </div>
      </div>
    </div>
  );
}

export default NotStarted;
