import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';
export default Route.extend({

names:[],
model()
{
  return this.get('store').findAll('book').then(response=>{
    response.forEach((item)=>{
       this.names.pushObject(item);
    });

    return response;
  });
},
setupController(controller,model)
{
  this._super(...arguments);
  
  controller.set('names',this.names);
}
});
