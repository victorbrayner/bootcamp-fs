import React, { Component } from 'react'
import Country from './Country';

export default class Countries extends Component {
    render() {
        const {countries} = this.props;
        return (
            <div>
                <ul>
                    {
                        countries.map(country => {
                            return <li key={country.id}><Country country={country} /></li>
                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}
