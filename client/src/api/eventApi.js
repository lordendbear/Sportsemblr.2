const events = [
    {
        id: 1,
        title: 'best match',
        totalPeople: 12,
        peopleNeeded: 6,
        date: new Date(),
        sport: {
            name: 'Football'
        }

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