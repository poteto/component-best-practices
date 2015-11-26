import Ember from 'ember';
import layout from './template';

const {
  K,
  Component,
  get
} = Ember;

export default Component.extend({
  layout,
  classNames: ['block'],

  didInitAttrs() {
    this._super(...arguments);
    this.cache = [];
  },

  actions: {
    noop: K,

    find(key) {
      let found = get(this, 'cache').findBy('key', key);
      let value = found || get(this, 'cache').addObject({ key, value: (Math.random(key) * 100) });

      return value;
    }
  }
});
