import React, { Component } from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button'
import ErrorBoundry from '../error-boundry';

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true,
        error: false
    };

    updatePerson () {
        const { selectedPerson } = this.props;
        if (!selectedPerson) {
            return;
        }
        this.swapiService
        .getPerson(selectedPerson)
        .then((person) => {
            this.setState({ person, loading: false });
        })
        .catch(this.newError)
    };

    newError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.selectedPerson !== prevProps.selectedPerson) {
            this.updatePerson();
            this.setState({
                loading: true
            })
        }
    };

    componentDidMount () {
        this.updatePerson();
    };

    render() {
        if (!this.state.person) {
            return <span>Select person from the list</span>
        }
        const { person, error, loading } = this.state;
        
        const hasData = !(error || loading);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner className="spinner" /> : null;
        const view = hasData ? <PersonView  person={person} getCrash={this.props.getCrash} /> : null;

        return (
                <ErrorBoundry>
                    <div className="jumbotron d-flex">
                        {errorMessage}
                        {spinner}
                        {view}
                    </div>
                </ErrorBoundry>
        )
    }
}

const PersonView = ({ person }) => {
    const { name, gender, birthYear, eyeColor, id } = person;
    return(
        <React.Fragment>
            <div className="col-5">
                <img className="person-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Sorry somthing goes wrong" />
            </div>        
                <div className="col-6">
                    <h3>{name}</h3>
                    <ul className="list-group">
                            <li className="list-group-item">
                                <span className="term">gender: </span>
                                <span>{gender}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">birthYear: </span>
                                <span>{birthYear}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">eyeColor: </span>
                                <span>{eyeColor}</span>
                            </li>
                            <ErrorButton />
                    </ul>
                </div>
        </React.Fragment>
    )

}