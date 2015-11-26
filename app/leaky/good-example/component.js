import BaseExample from '../base-example/component';

export default BaseExample.extend({
  init() {
    this._super(...arguments);
    this.sizes = ['Small', 'Medium', 'Large'];
  }
});
