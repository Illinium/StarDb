import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ id }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
                    return (
                        <ItemDetails 
                        selectedItem={id}
                        getData={getPerson}
                        getImgUrl={getPersonImage} 
                        >

                            <Record field="gender" label="Gender" />
                            <Record field="birthYear" label="BirthYear" />
                            <Record field="eyeColor" label="EyeColor" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

const PlanetDetails = ({ id }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
                    return (
                        <ItemDetails 
                        selectedItem={id}
                        getData={getPlanet}
                        getImgUrl={getPlanetImage} >

                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="RotationPeriod" />
                            <Record field="diameter" label="Diameter" />

                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

const StarshipDetails = ({ id }) => {
    return (
       <SwapiServiceConsumer>
           {
               ({ getStarship, getStarshipImage }) => {
                   return (
                        <ItemDetails 
                        selectedItem={id}
                        getData={getStarship}
                        getImgUrl={getStarshipImage} >
            
                            <Record field="model" label="Model" />
                            <Record field="length" label="Length" />
                            <Record field="costInCredits" label="Cost" />
            
                        </ItemDetails>
                   )
               }
           }
       </SwapiServiceConsumer>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}