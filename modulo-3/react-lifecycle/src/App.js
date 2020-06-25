import React, { Component } from 'react';
import ProjetoBase from './components/ProjetoBase/ProjetoBase';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      users: [],
      showUsers: false,
    };

  }
  async componentDidMount(){
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );
    const json = await res.json();

    this.setState({
      users: json.results,
    });
  }
  componentDidUpdate(){
    console.log('consoleDidUpdate de App.js')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount de App.js')
  }
  render() {
    return <ProjetoBase />;
  }
}


