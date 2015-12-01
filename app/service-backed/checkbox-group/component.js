import Ember from 'ember';

const { inject: { service }, Component } = Ember;
const OPERATION_MAP = {
  true: 'addObject',
  false: 'removeObject'
};

export default Component.extend({
  checkboxGroup: service('service-backed/checkbox-group'),
  actions: {
    check(group, item, isChecked) {
      return group[OPERATION_MAP[isChecked]](item);
    }
  }
});
