import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';
export default Route.extend({

//   beforeModel()
//   {
//
//   return new RSVP.Promise(function(resolve) {
//     later(function() {
//       resolve({ msg: 'Hold Your Horses' });
//
//     }, 1000);
//   });
// },
  model()
  {
    return this.get('store').findAll('book').then(response=>{
      console.log(response);
      return response;
    });
  },
  setupController(controller,model)
  {
    this._super(...arguments);
    controller.set('newmodel',model);
  }
});
