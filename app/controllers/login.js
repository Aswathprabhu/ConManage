import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notifications: service('notification-messages'),
  isStudent:service('is-student'),
  actions:{
    studentsign:function()
    {
      this.transitionToRoute("studentsign");
    },
    staffsign:function()
    {
      this.transitionToRoute("staffsign");
    },

      login:function(){
      let newmodel=this.get('model');
      let bool=null;
      let user=null;
      var _this=this;
      this.get('store').findAll('user').then(res => {
        console.log(res);
			return res;
    }).then(res=>
    {

      let flag=0;
      for(var i=0;i<res.length;i++)
      {
        if(res.content[i]._data.email===newmodel.email && res.content[i]._data.password===newmodel.password)
        {
          _this.bool=(res.content[i]._data.roleid==="0")?false:true;
          _this.user=res.content[i]._data.name;
          _this.set('isStudent.isStudent',_this.bool);
          _this.transitionToRoute("dashboard",_this.user);
          flag=1;
        }
      }
      if(flag===0)
      this.get('notifications').error('Wrong Credentials',{
        autoClear:true,
        clearDuration: 1000
        });
        else {
          {
            this.get('notifications').success('Logged In Successfully',{
              autoClear:true,
              clearDuration: 1000
              });
          }
        }
    });


    }
  }
});
