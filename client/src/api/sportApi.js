const sports = [
    {
        id: 1,
        name: 'Football'
    },
    {
        id: 2,
        name: 'Basketball'
    }
];

let lastId = 2;

class SportApi {
    static getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], sports));
            }, 1000);
        });
    }

    static saveSport(sport) {
        return new Promise((resolve, reject) => {
            if (sport.id) {
                const index = sports.findIndex(s => s.id === sport.id);
                sports.splice(index, 1, sport);
            } else {
                sport.id = ++lastId;
                sports.push(sport);
            }

            return resolve(Object.assign({}, sport));
        });
    }

    static deleteSport(id) {
        return new Promise((resolve, reject) => {
            const index = sports.findIndex(s => s.id === id);
            sports.splice(index, 1);

            return resolve(true);
        });
    }
}

export default SportApi;