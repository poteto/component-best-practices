import Ember from 'ember';

const {
  Route,
  set,
  get
} = Ember;

export default Route.extend({
  model() {
    let existingAnimals = this.store.peekAll('service-backed/animal');
    let animals = [
      { id: 0, name: 'Mr Meowington', species: 'cat' },
      { id: 1, name: 'Snuggles', species: 'cat' },
      { id: 2, name: 'Alpacalypse', species: 'alpaca' },
      { id: 3, name: 'Roofus McBarksalot', species: 'dog' },
      { id: 4, name: 'Chris P. Bacon', species: 'pig' }
    ];

    return get(existingAnimals, 'length') ? existingAnimals : animals.map((animal) => this.store.createRecord('service-backed/animal', animal));
  },

  setupController(controller, model) {
    set(controller, 'animals', model);
  }
});
