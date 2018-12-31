let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    //insert the driver to store
    store.drivers.push(this);
  }

  // trips() {
  //  return store.trips.filter(
  //    function(trip) {
  //      return trip.driverId === this.id;
  //    }.bind(this)
  //  )
  // }

  trips() {
    return store.trips.filter(
      (trip) => {
        return trip.driverId === this.id;
      }
    )
  }

  passengers() {
    return store.passengers.filter((passenger) => {
      return passenger;
    })
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    //insert passenger to store
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(
      (trip) => {
        return trip.passengerId === this.id;
      })
  }

  drivers() {
    return store.drivers.filter((driver) => {return driver})
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }

    //insert trip to store
    store.trips.push(this);
  }

  setDriver(driver) {
    this.driverId = driver.id;
  }

  setPassenger(passenger) {
    this.passengerId = passenger.id;
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    )
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    )
  }
}
