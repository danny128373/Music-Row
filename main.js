const createFunkArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  }
}
const createRapArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  }
}
const createCountryArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  }
}
const createBluegrassArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  }
}
const createPopArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  }
}

const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

jumpStopRecords.push(createFunkArtist("Dre Funkz", "Funk", 25), createRapArtist("Dusta Grimes", "Rap", 21),
  createRapArtist("Loyonce Branis", "Rap", 27));
chattenRecords.push(createCountryArtist("Bruce Atikins", "Country", 23), createBluegrassArtist("Bartholomew Danielson", "Bluegrass", 23),
  createCountryArtist("Avilee Dallas", "Country", 19));
polarRecords.push(createPopArtist("Jensen Brown", "Pop", 20), createPopArtist("Austin Kinkaid", "Pop", 22));



