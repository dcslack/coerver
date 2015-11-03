import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  account: Ember.inject.service(),

  actions: {
    verify() {
      const admin = this.get('admin');
      const account = this.get('account');

      ajax({
        url: `${window.__env.API_URL}/admin`,
        method: 'post',
        data: { admin },
      }).then(res => {
        account.set('isAdmin', true);
        return this.transitionToRoute('dashboard');
      }).catch(err => {
        this.Messenger.post({
          type: 'error',
          message: 'Unauthorized password!',
          showCloseButton: true,
          id: 'admin-unauthorized'
        });
      });
    },
  },
});
