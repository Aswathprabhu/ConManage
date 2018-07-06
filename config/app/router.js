import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts');
  this.route('contact',{path:'contacts/:contact_id'});
  this.route('homes');
  this.route('not-found',{path:'/*'});
  this.route('contup',{path:'contups/:contup_id'});
  this.route('addcontact');
});

export default Router;
