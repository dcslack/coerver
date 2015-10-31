import Ember from 'ember';

export default Ember.Controller.extend({
  account: Ember.inject.service(),

  actions: {
    logout() {
      this.get('account').logout().then(() => {
        this.transitionToRoute('index');
      });
    },
  },
});
