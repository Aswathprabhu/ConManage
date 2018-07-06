import Controller from '@ember/controller';

export default Controller.extend({
   actions:{
     fetch(str)
     {

       this.transitionToRoute("authordetail",str);
     }
   }
});
