import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';
export default Route.extend({
model(params){
    return this.get('store').findRecord('author',params["author_id"]).then(response =>{

      return this.get('store').findAll('book').then(res=>{
        var books=res.content.filterBy('_data.author',response.name);
        response.set('books',books);
        return response;
      });

    });
}
});
