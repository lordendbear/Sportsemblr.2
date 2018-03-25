const places = [];
let lastId = 0;

class PlaceApi {
    static savePlace(place) {
        return new Promise((resolve, reject) => {
            place.id = ++lastId;
            places.push(place);

            resolve(Object.assign({}, place));
        });
    }
}

export default PlaceApi;