export default class SwapiService {

    _baseLink = 'https://swapi.co/api';
    _baseImgUrl = 'https://starwars-visualguide.com/assets/img';

     getResorse = async (url) => {
        const res = await fetch(`${this._baseLink}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} recived ${res.status}`);
        }

        return await res.json();
    };

     getAllPeople = async () => {
        const res = await this.getResorse('/people/');
        return res.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
       const res = await this.getResorse(`/people/${id}/`);
       return this._transformPerson(res);
    };

    getAllPlanets = async () => {
        const res = await this.getResorse('/planets/');
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
       const planet = await this.getResorse(`/planets/${id}/`);
       return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResorse('/starships/');
        return res.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
       const res = await this.getResorse(`/starships/${id}/`);
       return this._transformStarship(res);
    };

    getPersonImage = ({ id }) => {
        return `${this._baseImgUrl}/characters/${id}.jpg`
    };

    getStarshipImage = ({ id }) => {
        return `${this._baseImgUrl}/starships/${id}.jpg`
    };

    getPlanetImage = ({ id }) => {
        return `${this._baseImgUrl}/planets/${id}.jpg`
    };

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

}