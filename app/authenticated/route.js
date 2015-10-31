import Ember from 'ember';

export default Ember.Route.extend({
  account: Ember.inject.service(),

  beforeModel() {
    const session = this.get('account');

    if (!this.get('account.isLoggedIn')) {
      return this.transitionTo('index');
    }
  },
});
