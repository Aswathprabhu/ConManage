import Controller from '@ember/controller';

export default Controller.extend({


  actions:{
    save:function(id){
              alert("Contact Updated Successfully");
              this.transitionToRoute("contact",id);
      }

  }
});
