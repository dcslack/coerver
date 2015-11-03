import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signup');
  this.route('login');
  this.route('account', function() {
    this.route('players', function() {
      this.route('player');
    });
    this.route('registrations');
  });
  this.route('authenticated');
  this.route('register');
  this.route('dashboard', function() {
    this.route('coaches');
    this.route('curriculums');
    this.route('grades');
    this.route('groups');
    this.route('participants');
    this.route('records');
    this.route('sessions');
    this.route('stats');
    this.route('users');
    this.route('registrations');
  });
  this.route('admin');
  this.route('programs');
});

export default Router;
