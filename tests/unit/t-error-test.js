import { module, test } from 'qunit';
import { generateKeys } from 'ember-intl-errors/helpers/t-error';

module('Unit | Helper | t-error', function() {
  test('it generates the proper keys', function(assert) {
    const keys = generateKeys('parent.child.grandchild', { attribute: 'name', message: 'blank' });
    assert.strictEqual(keys.length, 8, 'There is 8 keys');
    assert.strictEqual(keys[0], 'parent.child.grandchild.errors.name.blank');
    assert.strictEqual(keys[1], 'parent.child.grandchild.errors.blank');
    assert.strictEqual(keys[2], 'parent.child.errors.name.blank');
    assert.strictEqual(keys[3], 'parent.child.errors.blank');
    assert.strictEqual(keys[4], 'parent.errors.name.blank');
    assert.strictEqual(keys[5], 'parent.errors.blank');
    assert.strictEqual(keys[6], 'errors.name.blank');
    assert.strictEqual(keys[7], 'errors.blank');
  });
});
