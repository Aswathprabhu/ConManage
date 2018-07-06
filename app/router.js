import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('staffsign');
  this.route('studentsign');
  this.route('login');
  this.route('homes');
  this.route('books');
  this.route('bookdetail',{path:'books/:book_id'});
  this.route('authors');
  this.route('authordetail',{path:'authors/:author_id'});
  this.route('dashboard',{path:'dashboard/:dashboard_id'});
  this.route('newbook');
  this.route('newauthor');
  this.route('updatebook');
});

export default Router;
