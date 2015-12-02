import Ember from 'ember';

const { inject: { service }, Controller } = Ember;

export default Controller.extend({
  session: service('use-helpers/session'),

  init() {
    this._super(...arguments);
    this.shoes = [
      { id: 0, name: 'Bailey', size: 9 },
      { id: 1, name: 'Amie', size: 8 },
      { id: 2, name: 'Kara', size: 7 },
      { id: 3, name: 'Classic Cardy', size: 9 },
      { id: 4, name: 'Classic Short Quilted', size: 9 },
      { id: 5, name: 'Lodge', size: 6 },
      { id: 6, name: 'Lodge', size: 7 },
      { id: 7, name: 'Bailey Bow', size: 5 }
    ];
  }
});
