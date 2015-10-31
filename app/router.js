import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signup');
  this.route('login');
  this.route('account', function() {
    this.route('players');
    this.route('registrations');
  });
  this.route('authenticated');
  this.route('register');
});

export default Router;
