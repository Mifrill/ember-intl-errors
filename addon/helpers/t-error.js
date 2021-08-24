import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

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
  intl: service(),
  router: service(),

  compute([error]) {
    const routeName = this.get('router.currentRouteName');
    const keys = generateKeys(routeName, error);
    return this.get('intl').t(keys.shift(), { default: keys });
  }
});
