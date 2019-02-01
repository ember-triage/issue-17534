import Component from '@ember/component';
import { assert } from "@ember/debug";
import { isPresent } from "@ember/utils";

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    assert('fooBar should not be empty', isPresent(this.fooBar));
  }
});
