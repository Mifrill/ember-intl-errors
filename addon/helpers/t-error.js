import Ember from 'ember';

const { computed, inject, getOwner, Helper } = Ember;

export function generateKeys(routeName, { attribute, message }) {
  const routeSegments = routeName.split('.');
  const len = routeSegments.length;
  const results = routeSegments.reduce((memo, _, index, array) => {
    const parts = array.slice(0, len - index);
    memo.push(parts.join('.') + `.errors.${attribute}.${message}`);
    memo.push(parts.join('.') + `.errors.${message}`);
    return memo;
  }, []);
  results.push(`errors.${attribute}.${message}`);
  results.push(`errors.${message}`);
  return results;
}

export default Helper.extend({
  i18n: inject.service(),

  appController: computed(function() {
    return getOwner(this).lookup('controller:application');
  }),

  compute([error]) {
    const routeName = this.get('appController').currentRouteName;
    const keys = generateKeys(routeName, error);
    return this.get('i18n').t(keys.shift(), { default: keys });
  }
});
