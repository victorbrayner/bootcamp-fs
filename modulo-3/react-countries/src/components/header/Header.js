import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './header.module.css';

export default class Header extends Component {
    
    handleInputChange = (event) => {
        const newText = event.target.value;
        this.props.onChangeFilter(newText);
    }
    

    render() {
        const {filter, countryCount, totalPopulation} = this.props;
        return (
            <div className={css.flexRow}>
                <input
                style={{width: '300px'}}
                placeholder="Digite o país"
                type="text"
                value={filter}
                onChange={this.handleInputChange} /> |
                <span>Países: <strong>{countryCount}</strong></span> |
                <span>População: <strong>{formatNumber(totalPopulation)}</strong> </span>
            </div> 
        )
    }
}
