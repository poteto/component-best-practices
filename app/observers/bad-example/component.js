import Ember from 'ember';
import moment from 'moment';
import BaseExample from '../base-example/component';

const { get, set } = Ember;

export default BaseExample.extend({
  checkBirthday() {
    let today = moment();
    let birthDate = moment(get(this, 'birthDate'));
    let isBirthday = (today.month() === birthDate.month()) &&
      (today.date() === birthDate.date());

    set(this, 'isBirthday', isBirthday);
  },

  init() {
    this._super(...arguments);
    this.addObserver('birthDate', this, this.checkBirthday);
  },

  willDestroy() {
    this.removeObserver('birthDate', this, this.checkBirthday);
  }
});
