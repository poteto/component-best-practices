import Ember from 'ember';

const {
  Helper: { helper },
  typeOf
} = Ember;

export function mathToFixed([number, places]) {
  if (typeOf(number) !== 'number') {
    return;
  }

  return number.toFixed(places);
}

export default helper(mathToFixed);
