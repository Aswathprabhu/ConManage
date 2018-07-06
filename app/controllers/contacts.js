import Controller from '@ember/controller';

export default Controller.extend({
  actions:{

    save:function(){
      this.transitionToRoute("addcontact");
      }

    }

});
