import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';

export default class Header extends Component {
    
    handleInputChange = (event) => {
        const newText = event.target.value;
        this.props.onChangeFilter(newText);
    }
    

    render() {
        const {filter, countryCount, totalPopulation} = this.props;
        return (
            <div>
                <input type="text" value={filter} onChange={this.handleInputChange} /> |
                <span>Países: {countryCount}</span> |
                <span>População: {formatNumber(totalPopulation)} </span>
            </div> 
        )
    }
}
