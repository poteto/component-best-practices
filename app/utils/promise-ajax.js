import Ember from 'ember';

const {
  RSVP: { Promise, reject },
  $
} = Ember;


export function getJSONAsPromise(url, data) {
  if (!url) {
    return reject(false);
  }

  return new Promise((resolve, reject) => {
    $.ajax(url, data).then(resolve, reject);
  });
}
