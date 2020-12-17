import React, { Component } from "react";
import "./kauppatavara.css";
import Reactdom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Topnav extends Component {
  render() {
    let result = 0;
    let placename;
    let shopcarticon;
    const {
      toShopcart,
      running,
      toShop,
      totalKauppa,
      totalTavarat,
    } = this.props;
    // tee oma stylelle ja oma tekstille ja sit tyhjä ko yms yms
    let check = function (params) {
      console.log("totalkauppa:" + totalKauppa.length);
      console.log("totaltavarat:" + totalTavarat.length);

      if (totalKauppa.length < 0) {
        for (let i = 0; i < totalKauppa.length; i++) {
          let element = totalKauppa[i].value;
          result = result += element;
          placename = result;
        }
      } else {
        for (let i = 0; i < totalTavarat.length; i++) {
          let element = totalTavarat[i].value;
          result = result += element;
          placename = result;
        }
      }

      console.log(result);
      if (result === 0) {
        placename = "";
      }
    };
    check();

    if (!running) {
      return (
        <div className="topnav">
          <a href="/">Profiilisivut</a>
          <a className="topic active">Kauppa</a>
          <button
            onClick={toShopcart}
            className="btn btn-primary btn-sm m-2 move"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {placename}
          </button>
        </div>
      );
    } else {
      return (
        <div className="topnav">
          <a href="/">Profiilisivut</a>
          <a className="topic active">Ostoskärry</a>
          <button onClick={toShop} className="btn btn-primary btn-sm m-2 move">
            <FontAwesomeIcon icon={faShoppingCart} />
            {placename}
          </button>
        </div>
      );
    }
  }
}

export default Topnav;
