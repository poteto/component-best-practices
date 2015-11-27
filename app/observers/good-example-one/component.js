import Ember from 'ember';
import moment from 'moment';
import BaseExample from '../base-example/component';

const { computed, get } = Ember;

export default BaseExample.extend({
  isBirthday: computed('birthDate', {
    get() {
      let today = moment();
      let birthDate = moment(get(this, 'birthDate'));

      return (today.month() === birthDate.month()) &&
        (today.date() === birthDate.date());
    }
  })
});
