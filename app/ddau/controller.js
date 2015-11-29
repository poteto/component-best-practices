import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    save(thing) {
      return thing.save();
    }
  }
});
