import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class Information extends Component {

    swapiService = new SwapiService();

    state= {
        selectedPerson: null,
        hasError: false
    };

    onItemsSelected =  (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const itemList = (
            <ItemList 
                        onItemsSelected={this.onItemsSelected}  
                        getData = {this.swapiService.getAllPeople}
                        renderItem = {(item) => `${item.name} (${item.gender})`} />
        );
        const itemDetails = (
            <ItemDetails selectedPerson={this.state.selectedPerson} />
        );

        return (
            <Row left={ itemList } right={ itemDetails } />
        )
    }      
}