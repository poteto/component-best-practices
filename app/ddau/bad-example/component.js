import Ember from 'ember';
import layout from './template';

const { Component, get } = Ember;

export default Component.extend({
  layout,
  classNames: ['block'],

  actions: {
    saveThing() {
      get(this, 'thing').save();
    }
  }
});
