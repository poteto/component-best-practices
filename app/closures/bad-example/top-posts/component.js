import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'ul',
  classNames: ['list-unstyled'],

  actions: {
    selectPost(post) {
      this.sendAction('selectPost', post);
    }
  }
});
