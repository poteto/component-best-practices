import Ember from 'ember';
import config from './config/environment';

const {
  inject: { service },
  run: { scheduleOnce },
  getWithDefault,
  get
} = Ember;

const Router = Ember.Router.extend({
  location: config.locationType,
  metrics: service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = document.location.pathname;
      const title = getWithDefault(this, 'currentRouteName', 'unknown');

      get(this, 'metrics').trackPage({ page, title });
    });
  }
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
