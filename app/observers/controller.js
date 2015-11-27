import Ember from 'ember';
import moment from 'moment';

const { Controller, computed } = Ember;

export default Controller.extend({
  today: computed({
    get() {
      return moment();
    }
  })
});
