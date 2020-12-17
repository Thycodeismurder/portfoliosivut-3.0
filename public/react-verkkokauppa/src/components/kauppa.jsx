import React, { Component } from "react";
import Kauppatavara from "./kauppatavara";
import "./kauppatavara.css";

class Kauppa extends Component {
  render() {
    const {
      kauppa,
      onDelete,
      onIncrement,
      uudettavarat,
      onDecrement,
    } = this.props;

    if (uudettavarat.length > 0) {
      return (
        <div className="kauppa">
          {uudettavarat.map((kauppatavara) => (
            <Kauppatavara
              key={kauppatavara.id}
              kauppatavara={kauppatavara}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            ></Kauppatavara>
          ))}
        </div>
      );
    } else {
      return (
        <div className="kauppa">
          {kauppa.map((kauppatavara) => (
            <Kauppatavara
              key={kauppatavara.id}
              kauppatavara={kauppatavara}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              kauppa={kauppa}
            ></Kauppatavara>
          ))}
        </div>
      );
    }
  }
}

export default Kauppa;
