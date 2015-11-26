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
  sizes: null,

  actions: {
    noop: K,

    addSize(size) {
      return get(this, 'sizes').addObject(size);
    }
  }
});
