import Ember from 'ember';
import LifecycleMixin from '../mixin';

const { Component } = Ember;

export default Component.extend(LifecycleMixin, {
  classNames: ['block'],
  internal: null,
  enableEventLogging: true
});
