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
}

export default SportApi;