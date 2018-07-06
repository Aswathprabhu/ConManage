import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';


export default Route.extend({
  email:null,
  user:null,
  bool:null,
  res:null,
//   beforeModel()
//   {
//   return new RSVP.Promise(function(resolve) {
//     later(function() {
//       resolve({ msg: 'Hold Your Horses' });
//
//     }, 1000);
//   });
// },
  model(params)
  {
    var role;
    var _this=this;
    var user=params['dashboard_id'];


    return user;
  },
   setupController(controller,model){
     this._super(...arguments);
     controller.set('name',model);

   },


});
