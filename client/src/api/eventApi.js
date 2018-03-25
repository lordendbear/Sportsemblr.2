const events = [
    {

    }
]

class EventApi {
    static getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], events));
            }, 1000);
        });
    }
}

export default EventApi;