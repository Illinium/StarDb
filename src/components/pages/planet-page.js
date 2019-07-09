import React, {Component} from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';


export default class PlanetPage extends Component {
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
                <Row left={ <PlanetList onItemsSelected = {this.onItemsSelected} /> } right={ <PlanetDetails id = {this.state.selectedItem} /> } />
            </div>
        )
    }      
}