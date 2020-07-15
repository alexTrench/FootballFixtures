import React, { Component } from "react";
import "./css/App.css";
import NavBar from "./components/Navigation/FootballNav";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="titleHeader">
          <h1>Footballies</h1>
          <NavBar></NavBar>
        </div>
      </div>
    );
  }
}

export default App;
