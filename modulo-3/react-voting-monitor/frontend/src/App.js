import React, { Component } from 'react';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      candidates: [],
    };

    this.interval = null;
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      fetch('http://localhost:8080/votes').then((res) => {
        return res.json();
      }).then((json) => {
        this.setState({
          candidates: json.candidates,
        })
      })
    }, 1500);
  }

  render() {
    const {candidates} = this.state;

    if (candidates.length === 0) {
      return (
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      )
    }
    return (
      <div>
        {candidates.map(({id, name, votes}) => {
          return (
          <p key={id}>{name} - {votes}</p>
          )
        })}
      </div>
      )
  }
}
