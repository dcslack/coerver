import Ember from 'ember';

export default Ember.Route.extend({
  account: Ember.inject.service(),

  beforeModel(transition) {
    const isAllowed = this.get('routeName') === 'admin' ||
      this.get('account.isAdmin') ||
      window.location.hostname === 'localhost';

    return isAllowed || this.transitionTo('admin');
  },
});
