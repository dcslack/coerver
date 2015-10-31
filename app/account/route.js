import Ember from 'ember';
import Authenticated from 'coerver/authenticated/route';

export default Authenticated.extend({
  account: Ember.inject.service(),

  model() {
    return this.get('account.currentUser');
  },
});
