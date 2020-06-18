import React, { Component } from "react";
import css from "./counter.module.css";

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 2,
      steps: 0,
    };
  }

  handleDownClick = () => {
    const { currentCounter, steps} = this.state;

    this.setState({
      currentCounter: currentCounter - 1,
      steps: steps + 1,
    })
  };

  handleUpClick = () => {
    const { currentCounter, steps} = this.state;

    this.setState({
      currentCounter: currentCounter + 1,
      steps: steps + 1,
    })
  };
  

  render() {

    const { currentCounter, steps} = this.state;

    return (
      <div className={css.counterContainer}>
        <button onClick={this.handleDownClick} className="waves-effect waves-light btn red darken-4">-</button>
        <span className={css.counterValue}>{currentCounter}</span>
        <button onClick={this.handleUpClick} className="waves-effect waves-light btn green darken-4">
          +
        </button>
        <span className={css.counterValue}>({steps})</span>
      </div>
    );
  }
}
