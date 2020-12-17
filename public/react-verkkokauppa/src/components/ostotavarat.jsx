import React, { Component } from "react";

class Ostotavarat extends Component {
  render() {
    return (
      <div>
        <img src={this.props.ostotavarat.url} className="image" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.ostotavarat)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          increment{" "}
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.ostotavarat)}
          className="btn btn-secondary btn-sm increment m-2"
        >
          {" "}
          Decrement{" "}
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.ostotavarat.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.ostotavarat.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.ostotavarat;
    return value === 0 ? "zero" : value;
  }
}

export default Ostotavarat;
