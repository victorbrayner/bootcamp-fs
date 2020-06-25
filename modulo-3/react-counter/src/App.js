import React, { Component } from "react";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter/Counter2";

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }

  handleCount = (clickType) => {
    const { currentCounter, steps } = this.state;

    this.setState({
      currentCounter:
        clickType === "+" ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  }
  

  render() {
    const { currentCounter, steps} = this.state;
    return (
      <>
        <h3>Individual Counter</h3>
        <Counter />
        <Counter />
        <Counter />
        <h3>Shared Counter</h3>
        <Counter2 onCount={this.handleCount} countValue ={currentCounter} currentStep={steps}/>
        <Counter2 onCount={this.handleCount} countValue ={currentCounter} currentStep={steps}/>
        <Counter2 onCount={this.handleCount} countValue ={currentCounter} currentStep={steps}/>
      </>
    );
  }
}
