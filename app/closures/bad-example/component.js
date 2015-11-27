import Ember from 'ember';
import layout from './template';

const { Component, get } = Ember;

export default Component.extend({
  layout,
  classNames: ['block'],

  actions: {
    selectPost(post) {
      this.sendAction('selectPost', post);
    },

    findSubreddit() {
      this.sendAction('findSubreddit', get(this, 'subredditName'), 'controversial');
    }
  }
});
