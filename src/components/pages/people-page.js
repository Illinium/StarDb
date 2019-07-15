import React from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({history, match}) => {
        return (
            <div>
                <Row left={ <PersonList onItemsSelected = {(id)=> { history.push(id) }} /> } right={ <PersonDetails id = {match.params.id} /> } />
            </div>
        )
};

export default PeoplePage;
