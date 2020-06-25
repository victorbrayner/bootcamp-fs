import React, { Component } from 'react'
import User from './User';
import css from './users.module.css'

export default class Users extends Component {

    constructor(){
        super();
    
        this.state = {
          secondsVisible: 0,
        };

        this.interval = null; 
    
      }

    componentDidMount(){
        console.log('consoleDidMount de Users.js')
        this.interval = setInterval(() => {
            const {secondsVisible} = this.state;
            this.setState({
                secondsVisible: secondsVisible + 1
            })
        },1000);
    }

    componentDidUpdate(){
        console.log('consoleDidUpdate de Users.js')
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        const {users} = this.props;
        const {secondsVisible} = this.state;
        return (
            <div>
                <p>Componente Users visível por {secondsVisible} segundos </p>
                {users.map(user => {
                    const {login, name, picture} = user; 
                    return <li key={login.uuid}><User user={user} /></li>
                }
                )}
            </div>
        )
    }
}
