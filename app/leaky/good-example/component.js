import Ember from 'ember';
import BaseExample from '../base-example/component';

const { String: { w } } = Ember;

export default BaseExample.extend({
  init() {
    this._super(...arguments);
    let { sizes } = this.attrs;

    if (sizes) {
      this.sizes = w(sizes);
    } else {
      this.sizes = w('Small Medium Large');
    }
  }
});
