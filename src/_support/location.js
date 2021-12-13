class Location {
  constructor(location) {
    this.location = location;
    this.randNumber = Math.floor(Math.random() * 1000);
  }
}

module.exports = Location