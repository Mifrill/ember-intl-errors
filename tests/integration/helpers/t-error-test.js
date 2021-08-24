import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | t-error', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.router = this.owner.lookup('router:main');
    this.router.setupRouter();
  });

  test('it renders', async function(assert) {
    this.router.currentRouteName = '';
    this.emailError = { attribute: 'email', message: 'blank' }
    await render(hbs`{{t-error this.emailError}}`);
    assert.strictEqual(this.element.textContent.trim(), 'email can\'t be blank');
  });
});
