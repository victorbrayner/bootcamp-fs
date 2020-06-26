import React, { Component } from 'react'

export default class Country extends Component {
    render() {
        const {country} = this.props;
        return (
            <div>
               {country.name} 
            </div>
        )
    }
}
