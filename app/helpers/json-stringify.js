import Ember from 'ember';

const {
  Helper: { helper }
} = Ember;
const { stringify } = JSON;

export function JSONStringify([obj, spaces]) {
  return stringify(obj, null, spaces);
}

export default helper(JSONStringify);
