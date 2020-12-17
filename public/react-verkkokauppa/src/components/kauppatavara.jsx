import React, { Component } from "react";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
import "./kauppatavara.css";

class Kauppatavara extends Component {
  render() {
    return (
      <div className="body">
        {/* <img src={this.props.kauppatavara.url} className="image" /> */}
        <div
          style={{
            backgroundImage: `url("${this.props.kauppatavara.url}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="image"
        />
        <div className="product">
          <h1 key={this.props.kauppatavara.id}>
            {this.props.kauppatavara.tavara}
          </h1>
          <p>{this.props.kauppatavara.info}</p>
          <ul>
            {this.props.kauppatavara.list.map((text) => (
              <li key={text.id}>{text.text}</li>
            ))}
          </ul>

          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.kauppatavara)}
            className="btn btn-secondary btn-sm increment m-2"
          >
            {" "}
            Increment{" "}
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.kauppatavara)}
            className="btn btn-secondary btn-sm increment m-2"
          >
            {" "}
            Decrement{" "}
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.kauppatavara.id)}
            className="btn btn-danger btn-sm m-2 delete"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "value badge m-2 badge-";
    classes += this.props.kauppatavara.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.kauppatavara;
    return value === 0 ? "zero" : value;
  }
}

export default Kauppatavara;
