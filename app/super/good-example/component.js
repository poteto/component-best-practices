import BaseExample from '../base-example/component';

export default BaseExample.extend({
  didInitAttrs() {
    this._super(...arguments);
    this.thing = ['good'];
  }
});
