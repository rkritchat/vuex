export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    return state.pets.filter(e => e.species === 'cat')
  },
  getAllDogs: (state) => {
    return state.pets.filter(e => e.species === 'dog') //dog no has species in data
  }
}
