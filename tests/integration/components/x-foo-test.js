import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x-foo', function(hooks) {
  setupRenderingTest(hooks);

  test('it throws', async function(assert) {
    assert.expect(1);

    try {
      await render(hbs`{{x-foo}}`);
    } catch (e) {
      assert.ok(e, 'throws error');
    }
  });
});
