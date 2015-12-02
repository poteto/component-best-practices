import Ember from 'ember';

const {
  inject: { service },
  Helper,
  observer,
  get
} = Ember;

export default Helper.extend({
  session: service('use-helpers/session'),

  compute([shoe]) {
    return parseInt(get(this, 'session.currentUser.shoeSize')) === parseInt(get(shoe, 'size'));
  },

  onShoeSizeChange: observer('session.currentUser.shoeSize', function() {
    this.recompute();
  })
});
