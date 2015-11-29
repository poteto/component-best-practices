import Ember from 'ember';

const { Route, get, set } = Ember;

export default Route.extend({
  model() {
    return get(this.store.peekAll('ddau/thing'), 'firstObject') || this.store.createRecord('ddau/thing');
  },

  setupController(controller, model) {
    set(controller, 'thing', model);
  }
});
