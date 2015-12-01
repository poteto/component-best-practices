import Ember from 'ember';

const {
  Helper: { helper }
} = Ember;

export function contains([collection, item]) {
  return collection.contains(item);
}

export default helper(contains);
