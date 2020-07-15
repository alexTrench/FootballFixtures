import React from "react";

function SeasonData(props) {
  return (
    <div>
      {props.data.seasons.map((element) => (
        <div key={element.id}>
          <div className="DataList">
            {element.startDate.slice(0, 4)}-{element.endDate.slice(0, 4)}{" "}
            Champion : {!element.winner ? "Not Decided" : element.winner.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeasonData;
