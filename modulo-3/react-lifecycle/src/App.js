import React, { Component } from 'react';
import Users from './components/users/Users';

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

  handleShowUsers = (event) => {
    this.setState({showUsers: event.target.checked})
  }
  

  render() {
    const {showUsers, users} = this.state;
    
    return <div>
      <div className="switch">
        <label>
          Mostrar usuários
          <input type="checkbox" onChange={this.handleShowUsers} />
          <span className="lever"></span>
        </label>
      </div>
      <hr />
      {showUsers && <Users users={users} />}
    </div>;
  }
}


