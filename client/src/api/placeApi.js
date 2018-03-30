const places = [{
    id: 1,
    title: 'MY AWESOME PLACE'
}];
let lastId = 2;

class PlaceApi {
    static getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], places));
            }, 1000);
        });
    }

    static savePlace(place) {
        return new Promise((resolve, reject) => {
            if (place.id) {
                const index = places.findIndex(e => e.id === place.id);
                places.splice(index, 1, place);
            } else {
                place.id = lastId++;
                places.push(place);
            }

            resolve(Object.assign({}, place));
        });
    }
}

export default PlaceApi;