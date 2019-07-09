import React, {Component} from 'react';
import Row from '../row';
import { StarshipList, StarshipDetails } from '../sw-components';


export default class StarshipPage extends Component {
    state = {
        onItemSelected: null
    }

    onItemsSelected =  (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        return (
            <div>
                <Row left={ <StarshipList onItemsSelected = {this.onItemsSelected} /> } right={ <StarshipDetails id = {this.state.selectedItem} /> } />
            </div>
        )
    }      
}