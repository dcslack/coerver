import Ember from 'ember';

export default Ember.Controller.extend({
  account: Ember.inject.service(),

  actions: {
    signup() {
      const firstName = this.get('firstName');
      const lastName = this.get('lastName');
      const email = this.get('email');
      const phone = this.get('phone');
      const street = this.get('street');
      const city = this.get('city');
      const state = this.get('state');
      const zip = this.get('zip');
      const password = this.get('password');
      const account = this.get('account');

      this.set('isCreating', true);

      this.store.createRecord('user', {
        firstName, lastName, email,
        phone, street, city,
        state, zip, password
      }).save().then(user => {
        const id = user.get('id');

        account.getToken(name, email, id).then(res => {
          if (res.token) {
            account.set('currentUser', user);

            this.get('cookie').setCookie('coerver-id', res.token).then(() => {
              this.transitionToRoute('index');
            });
          }
        }, () => {
          this.Messenger.post({
            type: 'error',
            message: 'Error signing up!',
            showCloseButton: true,
          });
        });
      });
    },
  },
});
