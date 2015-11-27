import Ember from 'ember';
import moment from 'moment';
import BaseExample from '../base-example/component';

const { get, set } = Ember;

export default BaseExample.extend({
  didReceiveAttrs() {
    let isBirthday = this.checkBirthday(
      moment(get(this, 'today')),
      moment(get(this, 'birthDate'))
    );

    set(this, 'isBirthday', isBirthday);
  },

  checkBirthday(today, birthDate) {
    return (today.month() === birthDate.month()) &&
      (today.date() === birthDate.date());
  }
});
