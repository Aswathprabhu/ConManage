import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    edit:function(id)
    {
    this.transitionToRoute("contup",id);
  },
    delete:function(id)
    {
      let confo=confirm("Are you sure");
      if(confo){
      this.get('store').findRecord('contact',id,{backgroundReload:false}).then(function(response){
      response.destroyRecord();
      });
      alert("Contact Deleted Sucessfully");
      this.transitionToRoute("contacts");
      }
    }
  }
});
