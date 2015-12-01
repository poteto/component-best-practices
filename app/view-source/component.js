import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
  tagName: 'a',
  classNames: ['btn', 'btn-lg', 'btn-default'],
  attributeBindings: ['href'],

  href: computed('currentRouteName', {
    get() {
      return `https://github.com/poteto/component-best-practices/tree/master/app/${get(this, 'currentRouteName')}`;
    }
  })
});
