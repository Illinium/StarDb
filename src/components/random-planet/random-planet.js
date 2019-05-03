import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {
    swapiSrvice = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        setInterval(this.updatePlanet, 4500);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet,
            loading: false 
        });
    };

    newError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const idx = Math.floor(Math.random()*19) + 1;
        const id = idx;
        this.swapiSrvice
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.newError)
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(error || loading);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner className="spinner" /> : null;
        const view = hasData ? <PlanetView  planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {view}
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
                    <img className="planet-img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                    <div>
                        <h3>{name}</h3>
                        <ul className="list-group">
                                <li className="list-group-item">
                                    <span className="term">population: </span>
                                    <span>{population}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">rotationPeriod: </span>
                                    <span>{rotationPeriod}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">diameter: </span>
                                    <span>{diameter}</span>
                                </li>
                        </ul>
                    </div>
        </React.Fragment>
    )
}