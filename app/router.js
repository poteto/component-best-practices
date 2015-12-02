import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('leaky');
  this.route('super');
  this.route('observers');
  this.route('dom-attr');
  this.route('closures');
  this.route('ddau');
  this.route('lifecycle');
  this.route('service-backed');
  this.route('use-helpers');
});

export default Router;
