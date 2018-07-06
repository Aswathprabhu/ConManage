import Controller from '@ember/controller';

export default Controller.extend({

     actions:{
       adduser:function(str)
       {
         let newuser=this.get('model');

         newuser.roleid=str;
         var newrecord=this.get('store').createRecord('user',newuser).save();
           alert("Account created Successfully");
         this.transitionToRoute("dashboard",newuser.name+" "+newuser.roleid);

       }
     }
});
