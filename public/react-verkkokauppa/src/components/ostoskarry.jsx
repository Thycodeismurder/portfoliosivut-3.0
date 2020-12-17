import React, { Component } from "react";
import Ostotavarat from "./ostotavarat";

class Ostoskarry extends Component {
  render() {
    const {
      totalKauppa,
      onDelete,
      onIncrement,
      totalTavarat,
      onDecrement,
    } = this.props;
    if (totalTavarat.length > 0) {
      return (
        <div>
          {totalTavarat.map((ostotavarat) => (
            <Ostotavarat
              key={ostotavarat.id}
              ostotavarat={ostotavarat}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            ></Ostotavarat>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {totalKauppa.map((ostotavarat) => (
            <Ostotavarat
              key={ostotavarat.id}
              ostotavarat={ostotavarat}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            ></Ostotavarat>
          ))}
        </div>
      );
    }
  }
}

export default Ostoskarry;
