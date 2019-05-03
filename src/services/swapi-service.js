export default class SwapiService {

    _baseLink = 'https://swapi.co/api';

    async getResorse(url) {
        const res = await fetch(`${this._baseLink}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `recived ${res.status}`);
        }

        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResorse('/people/');
        return res.results.map(this._transformPerson);
    };

    async getPerson(id) {
       const res = await this.getResorse(`/people/${id}/`);
       return this._transformPerson(res);
    };

    async getAllPlanets() {
        const res = await this.getResorse('/planets/');
        return res.results.map(this._transformPlanet);
    };

    async getPlanet(id) {
       const planet = await this.getResorse(`/planets/${id}/`);
       return this._transformPlanet(planet);
    };

    async getAllStarships() {
        const res = await this.getResorse('/starships/');
        return res.results.map(this._transformStarship);
    };

    async getStarship(id) {
       const res = await this.getResorse(`/starships/${id}/`);
       return this._transformStarship(res);
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
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

}