import Ember from 'ember';

export default Ember.Route.extend({
  account: Ember.inject.service(),

  model() {
    return this.get('account.currentUser.participants');
  },
});
