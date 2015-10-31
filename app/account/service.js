import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Service.extend({
  isLoggedIn: Ember.computed('currentUser', function isLoggedIn() {
    return !Ember.isEmpty(this.get('currentUser'));
  }),

  token: Ember.computed(function token() {
    return this.get('cookie').getCookie('coerver-id');
  }),

  logout() {
    return new Promise(resolve => {
      this.get('cookie').removeCookie('coerver-id');
      this.set('currentUser', null);
      resolve();
    });
  },

  login(email, password) {
    return ajax({
      url: window.__env.SESSION_LOGIN_URL,
      type: 'post',
      data: {
        email, password,
      },
    });
  },

  getToken(name, email, id) {
    return ajax({
      url: window.__env.SESSION_TOKEN_URL,
      type: 'post',
      data: {
        name, email, id,
      },
    });
  },

  verifyToken() {
    const token = this.get('token');

    return ajax({
      url: window.__env.SESSION_VERIFY_URL,
      type: 'post',
      data: {
        token,
      },
    });
  },
});
