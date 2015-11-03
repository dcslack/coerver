import Ember from 'ember';

export default Ember.Route.extend({
  account: Ember.inject.service(),

  beforeModel() {
    if (this.get('account.isLoggedIn')) {
      return this.transitionTo('account');
    }
  },
});
