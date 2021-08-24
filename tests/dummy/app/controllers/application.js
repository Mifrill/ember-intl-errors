import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.emailError = { attribute: 'email', message: 'blank' };
    this.nameError = { attribute: 'name', message: 'invalid' };
    this.notFoundError = { attribute: 'other', message: 'blah' };
  }
});
