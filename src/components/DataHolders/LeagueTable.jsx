import React from "react";

function LeagueTable(props) {
  const standings = props.props.api.standings[0];

  return (
    <div className="leagueTable">
      {" "}
      <table style={{ width: "50%" }}>
        <tbody>
          <tr>
            <td>position</td>
            <td>Team Name</td>
            <td>MP</td>
            <td>Wins</td>
            <td>Draws</td>
            <td>Loses</td>
            <td>GD</td>
            <td>Points</td>
            <td>Form</td>
          </tr>
        </tbody>
        {standings.map((element) => (
          <tbody key={element.team_id}>
            <tr>
              <td>{element.rank}</td>
              <td>{element.teamName}</td>
              <td>{element.all.matchsPlayed}</td>
              <td>{element.all.win}</td>
              <td>{element.all.draw}</td>
              <td>{element.all.lose}</td>
              <td>{element.all.goalsFor - element.all.goalsAgainst}</td>
              <td>{element.points}</td>
              <td>{element.forme}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default LeagueTable;
