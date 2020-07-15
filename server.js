const express = require("express");
const fetch = require("node-fetch");
const Datastore = require("nedb");

const port = process.env.PORT || 4000;
const app = express();
const Fixtures = new Datastore("fixtures.db");
const LeagueIDs = new Datastore("LeagueIDs");
Fixtures.loadDatabase();
LeagueIDs.loadDatabase();
const authToken = { "X-Auth-Token": "feca863f77164f64ad36046dde2ef8da" };

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/api/express_test", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.get("/api/getPreviousWinners/:id", async (req, res) => {
  const compID = await req.params.id;
  const response = await fetch(
    `http://api.football-data.org/v2/competitions/${compID}`,
    {
      method: "GET",
      headers: authToken,
    }
  );
  const responseText = await response.json();

  res.send(responseText);
});

//rapid api requests
//100 a day so use sparringly
const APIfootballToken = {
  "x-RapidAPI-Key": "7b07769af15dd3054807462c0dd768fd",
};

app.get("/api/football/status", async (req, res) => {
  const response = await fetch("https://v2.api-football.com/status", {
    method: "GET",
    headers: APIfootballToken,
  });

  const responseText = await response.json();
  res.send(responseText);
});

app.get("/api/football/getAllSeasons", async (req, res) => {
  const response = await fetch("https://v2.api-football.com/leagues", {
    method: "GET",
    headers: APIfootballToken,
  });

  const responseText = await response.json();
  res.send(responseText);
});

//https://v2.api-football.com/leagues/country/england for all leagues in england
//https://v2.api-football.com/leagues/leagues/england for all leagues in england
//"https://v2.api-football.com/leagues/season/{season}" for all leagues ina a season
//"https://v2.api-football.com/leagues/search/{nameofleague}"  with spaces replaced by _
//"https://v2.api-football.com/teams/league/{league_id}" team data
//Get all statistics for a {team_id} in a {league_id} ("https://v2.api-football.com/statistics/{league_id}/{team_id}");
//Get all Standings from one {league_id}get("https://v2.api-football.com/leagueTable/{league_id}");

//current prem table
app.get("/api/getSeasons/:leagueID", async (req, res) => {
  const response = await fetch(
    `https://v2.api-football.com/leagueTable/${req.params.leagueID}`,
    {
      method: "GET",
      headers: APIfootballToken,
    }
  );

  const responseText = await response.json();
  res.send(responseText);
});

//current round of this prem season
app.get("/api/getFixtures/:leagueID", async (req, res) => {
  const response = await fetch(
    `https://v2.api-football.com/fixtures/league/524`,
    {
      method: "GET",
      headers: APIfootballToken,
    }
  );

  const responseText = await response.json();
  Fixtures.remove({}, { multi: true });
  Fixtures.insert(responseText.api.fixtures);
  res.send(responseText);
});

let DateToShowFixturesFor;
//set date of fixtures to show //only todays
app.get("/api/setDate/:date", async (req, res) => {
  DateToShowFixturesFor = await req.params.date;
  res.send(DateToShowFixturesFor);
});

app.get("/api/getFixtureByDate", async (req, res) => {
  let splicedDate;
  if (DateToShowFixturesFor !== undefined) {
    splicedDate = new Date(DateToShowFixturesFor).toISOString().slice(0, 10);
  } else {
    DateToShowFixturesFor = new Date();
    splicedDate = new Date(DateToShowFixturesFor).toISOString().slice(0, 10);
  }



  const responseText = await response.json();

  Fixtures.remove({}, { multi: true });
  Fixtures.insert(responseText.api.fixtures);
  Fixtures.find({ event_date: new RegExp(splicedDate) })
    .sort({ league_id: 1, event_timestamp: 1 })
    .exec(async (err, docs) => {
      res.send(docs);
    });
});

app.get("/getUpcomingFixtures", async (req, res) => {
  let splicedDate;
  if (DateToShowFixturesFor !== undefined) {
    splicedDate = new Date(DateToShowFixturesFor).toISOString().slice(0, 10);
  } else {
    DateToShowFixturesFor = new Date();
    splicedDate = new Date(DateToShowFixturesFor).toISOString().slice(0, 10);
  }

  console.log(splicedDate);
  Fixtures.find({ event_date: new RegExp(splicedDate) }, async (err, docs) => {
    res.send(docs);
  });
});

app.get("/api/getFixtureLineup/:fixtureID", async (req, res) => {
  const fixtureID = req.params.fixtureID;
  const response = await fetch(
    `https://v2.api-football.com/lineups/${fixtureID}`,
    {
      method: "GET",
      headers: APIfootballToken,
    }
  );

  const responseText = await response.json();
  res.send(responseText);
});

//GET : https://v2.api-football.com/fixtures/league/524
//status
//Get all available from one {date}
//get("https://api-football-v1.p.rapidapi.com/v2/fixtures/date/{date}");
//get("https://api-football-v1.p.rapidapi.com/v2/fixtures/date/{date}?timezone=Europe/London");
//get by date and set nav bar to generate fixtures by todays date
