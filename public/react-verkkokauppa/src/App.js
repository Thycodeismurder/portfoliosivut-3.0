import "./App.css";
import Kauppa from "./components/kauppa";
import Ostoskarry from "./components/ostoskarry";
import React, { Component } from "react";
import { confirm } from "./components/Confirmation";
import { confirm as confirmComplex } from "./components/ComplexConfirmation";
import axios from "axios";
import kuva1 from "./gallery/(1).jpg";
import kuva2 from "./gallery/(2).jpg";
import kuva3 from "./gallery/(3).jpg";
import kuva4 from "./gallery/(4).jpg";
import kuva5 from "./gallery/(5).jpg";
import kuva6 from "./gallery/(6).jpg";
import kuva7 from "./gallery/(7).jpg";
import kuva8 from "./gallery/(8).jpg";
import kuva9 from "./gallery/(9).jpg";
import kuva10 from "./gallery/(10).jpg";
import Kauppatavara from "./components/kauppatavara";
import Bottomnav from "./components/bottomnav";
import Topnav from "./components/topnav";

class App extends Component {
  state = {
    running: false,
    move: false,
    shop: true,
    kauppa: [
      {
        id: 1,
        value: 0,
        url: kuva1,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 2,
        value: 0,
        url: kuva2,
        tavara: "Asd notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 3,
        value: 0,
        url: kuva3,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 4,
        value: 0,
        url: kuva4,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 5,
        value: 0,
        url: kuva5,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 6,
        value: 0,
        url: kuva6,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 7,
        value: 0,
        url: kuva7,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 8,
        value: 0,
        url: kuva8,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 9,
        value: 0,
        url: kuva9,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 10,
        value: 0,
        url: kuva10,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 11,
        value: 0,
        url: kuva1,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
      {
        id: 12,
        value: 0,
        url: kuva2,
        tavara: "Aser notebook 5000miljuuna nvidia 3080 näyttiksellä",
        info:
          "Xbox Series X mahdollistaa pelaamisen aidolla 4K-resoluutiolla 12 teraflopsin grafiikkatehon ja 16 GB grafiikkamuistin avulla. Voit nauttia mediasisällöstä Blu-ray-asemalla, ja konsolilla voi myös pelata neljän aikaisemman sukupolven Xbox-pelejä.",
        list: [
          { id: 1, text: "Runsaasti tehoa 4K-pelaamiseen" },
          { id: 2, text: "4k Blu-ray-asema, HDR" },
          { id: 3, text: "1TB sisäinen muisti" },
        ],
      },
    ],
    kauppatavarat: [],
    message: "",
  };

  componentDidMount() {
    axios.get("../../../tavarat.json").then((response) => {
      this.setState({ kauppatavarat: response.data });
    });
  }

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClickComplex = this.handleOnClickComplex.bind(this);
  }
  async handleOnClick() {
    console.log("hoge!");
    if (!this.state.running) {
      if (await confirm("Haluatko siirtyä ostoskärryyn?")) {
        const move = true;
        this.setState({
          message: "Kyllä!",
          move,
        });
      } else {
        this.setState({
          message: "asd!",
          move: false,
        });
      }
      if (this.state.move) {
        const running = true;
        const move = false;
        this.setState({ running, move });
        console.log(this.state.running + move);
      }
    } else {
      if (await confirm("Haluatko siirtyä takaisin kauppaan?")) {
        const move = true;
        this.setState({
          message: "Kyllä!",
          move,
        });
      } else {
        this.setState({
          message: "No EN!",
          move: false,
        });
      }
      if (this.state.move) {
        const running = false;
        const move = false;
        this.setState({ running, move });
        console.log(this.state.running + move);
      }
    }
  }
  handleOnClickComplex() {
    confirmComplex({ message: "hello" }).then(
      ({ button, input }) => {
        this.setState({
          message: `${button} button pressed. input: ${input}`,
        });
      },
      () => {
        this.setState({
          message: `canceled!`,
        });
      }
    );
  }

  movetoShopcart = () => {
    this.handleOnClick();
  };
  cancelShop = () => {
    this.handleOnClick();
  };
  handleDelete = (kauppatavaraId) => {
    const kauppa = this.state.kauppa.filter((c) => c.id !== kauppatavaraId);
    const kauppatavarat = this.state.kauppatavarat.filter(
      (c) => c.id !== kauppatavaraId
    );
    this.setState({ kauppa });
    this.setState({ kauppatavarat });
  };

  handleIncrement = (kauppatavara) => {
    const kauppa = [...this.state.kauppa];
    const index = kauppa.indexOf(kauppatavara);
    const kauppatavarat = [...this.state.kauppatavarat];
    kauppa[index] = { ...kauppatavara };
    kauppa[index].value++;
    this.setState({ kauppa });
    const index2 = kauppatavarat.indexOf(kauppatavara);
    kauppatavarat[index2] = { ...kauppatavara };
    kauppatavarat[index2].value++;
    this.setState({ kauppatavarat });
    console.log("asd");
  };

  handleDecrement = (kauppatavara) => {
    const kauppa = [...this.state.kauppa];
    const index = kauppa.indexOf(kauppatavara);
    const kauppatavarat = [...this.state.kauppatavarat];
    kauppa[index] = { ...kauppatavara };
    kauppa[index].value--;
    if (kauppa[index].value < 0) {
      kauppa[index].value++;
    }
    this.setState({ kauppa });
    const index2 = kauppatavarat.indexOf(kauppatavara);
    kauppatavarat[index2] = { ...kauppatavara };
    kauppatavarat[index2].value--;
    if (kauppatavarat[index2].value < 0) {
      kauppatavarat[index2].value++;
    }
    this.setState({ kauppatavarat });
    console.log("asd");
  };

  handleReset = () => {
    const kauppa = this.state.kauppa.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ kauppa });
  };

  render() {
    if (this.state.running) {
      return (
        <React.Fragment>
          <Topnav
            running={this.state.running}
            toShop={this.cancelShop}
            toShopcart={this.movetoShopcart}
            totalKauppa={this.state.kauppa.filter((c) => c.value > 0)}
            totalTavarat={this.state.kauppatavarat.filter((c) => c.value > 0)}
          ></Topnav>
          <Ostoskarry
            simpleClick={this.handleOnClick}
            totalKauppa={this.state.kauppa.filter((c) => c.value > 0)}
            totalTavarat={this.state.kauppatavarat.filter((c) => c.value > 0)}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          ></Ostoskarry>
          <Bottomnav running={this.state.running}></Bottomnav>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Topnav
            running={this.state.running}
            toShop={this.cancelShop}
            toShopcart={this.movetoShopcart}
            totalKauppa={this.state.kauppa.filter((c) => c.value > 0)}
            totalTavarat={this.state.kauppatavarat.filter((c) => c.value > 0)}
          ></Topnav>
          <Kauppa
            simpleClick={this.handleOnClick}
            kauppa={this.state.kauppa}
            uudettavarat={this.state.kauppatavarat}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          ></Kauppa>
          <Bottomnav running={this.state.running}></Bottomnav>
        </React.Fragment>
      );
    }
  }
}

export default App;
