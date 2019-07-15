import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import { PeoplePage } from '../pages';
import { PlanetPage } from '../pages';
import { StarshipPage } from '../pages';
import { StarshipDetails } from '../sw-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <div className="container">
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <Header />
                        <RandomPlanet />
                        <Switch>
                              <Route path='/'
                                     exact
                                     render={() => <h2>Home Page</h2>}
                              />
                              <Route path="/people/:id?" component={PeoplePage} />
                              <Route path="/planets/:id?" component={PlanetPage} />
                              <Route path="/starships" exact component={StarshipPage}/>
                              <Route path="/starships/:id"
                                     exact
                                     render={({match}) => {
                                         const {id} = match.params;
                                         return <StarshipDetails id={id} />
                                  }}
                              />
                              <Route render={() =>  <h2>Sorry, this page not found.</h2>} />
                          </ Switch>
                    </Router>
                </SwapiServiceProvider>
            </div>
        )
    }
}
