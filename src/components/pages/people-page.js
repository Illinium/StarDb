import React, {Component} from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';


export default class PeoplePage extends Component {
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
                <Row left={ <PersonList onItemsSelected = {this.onItemsSelected} /> } right={ <PersonDetails id = {this.state.selectedItem} /> } />
            </div>
        )
    }      
}