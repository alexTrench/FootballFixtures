import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import DateWheel from "./DateWheel";

class DateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  async componentDidMount() {
    fetch(`/api/setDate/${this.state.date}`);
  }

  async OnDateSelection(dateFromProp) {
    const response = await fetch(`/api/setDate/${dateFromProp}`);
    const responseText = await response.text();

    this.setState({ date: new Date(responseText) });
    this.props.getFixtures();
  }

  render() {
    return (
      <div className="DateSelection">
        <DateWheel
          date={this.state.date}
          onClick={this.OnDateSelection.bind(this)}
        ></DateWheel>
      </div>
    );
  }
}

export default DateComponent;
