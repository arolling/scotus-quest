import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', {path: '/question/:query_id'});
  this.route('tagged', {path: '/tagged/:tag_id'});
});

export default Router;
