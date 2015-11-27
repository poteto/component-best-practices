import Ember from 'ember';
import moment from 'moment';
import layout from './template';

const { Component, computed, get } = Ember;

export default Component.extend({
  layout,
  classNames: ['block'],
  isBirthday: false,
  birthDate: null,

  age: computed('birthDate', {
    get() {
      return moment().diff(moment(get(this, 'birthDate')), 'years');
    }
  })
});
