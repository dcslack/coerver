import Ember from 'ember';

export default Ember.Route.extend({
  account: Ember.inject.service(),

  beforeModel() {
    const account = this.get('account');

    if (account.get('token')) {
      return account.verifyToken().then(res => {
        return this.store.findRecord('user', res.id).then(user => {
          return account.set('currentUser', user);
        });
      }).catch(err => {
        account.logout();
      });
    }
  },
});
