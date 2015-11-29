import Ember from 'ember';

const { inject: { service }, Controller } = Ember;

export default Controller.extend({
  foo: null,
  bar: 1,
  baz: 'foo',
  lifecycleEvents: service('lifecycle/lifecycle-events')
});
