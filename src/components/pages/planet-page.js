import React from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';


const PlanetPage = ({history, match}) => {
    return (
        <div>
            <Row left={ <PlanetList onItemsSelected = {(id) => { history.push(id) }} /> } right={ <PlanetDetails id = {match.params.id} /> } />
        </div>
    )
};
export default PlanetPage;
