import BaseExample from '../base-example/component';

export default BaseExample.extend({
  didInitAttrs() {
    this.thing = ['bad'];
  }
});
