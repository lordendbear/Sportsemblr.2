import requester from './requester';

const API_URL = 'http://localhost:4040/api';

class PlaceApi {
    static getAll() {
        const url = `${API_URL}/places`;

        return requester.get(url);
    }

    static savePlace(place) {
        if (place._id) {
            return this.updatePlace(place);
        }

        return this.createPlace(place);
    }

    static updatePlace(place) {
        const url = `${API_URL}/places/${place._id}`;

        return requester.putAuthorized(url, place);
    }

    static createPlace(place) {
        const url = `${API_URL}/places`;

        return requester.postAuthorized(url, place);
    }
}

export default PlaceApi;