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

let lastId = 2;

class EventApi {
  static getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], events));
      }, 1000);
    });
  }

  static saveEvent(event) {
    return new Promise((resolve, reject) => {
      if (event.id) {
        const index = events.findIndex(e => e.id === event.id);
        events.splice(index, 1, event);
      } else {
        event.id = lastId++;
        events.push(event);
      }

      resolve(Object.assign({}, event));
    });
  }
}

export default EventApi;