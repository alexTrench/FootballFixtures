import React from "react";

function CurrentTeams(props) {
  return (
    <div>
      {props.data.teams.map((element) => (
        <div className="DataList" key={element.id}>
          {element.shortName} founded {element.founded} Stadium {element.venue}
        </div>
      ))}
    </div>
  );
}

export default CurrentTeams;
