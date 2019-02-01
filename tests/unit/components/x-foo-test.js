import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | x-foo', function(hooks) {
  setupTest(hooks);

  test('didReceiveAttrs throws', function(assert) {
    let component = this.owner.factoryFor('component:x-foo').create();
    assert.ok(component);

    assert.throws(
      () => {
        component.didReceiveAttrs();
      },
      /fooBar should not be empty/
    );
  });
});
