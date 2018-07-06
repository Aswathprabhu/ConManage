import Route from '@ember/routing/route';

export default Route.extend({
  model()
  {
    return this.get('store').findAll('contact').then(response=>{
           console.log(response);
           return response;
         });
  }
});
