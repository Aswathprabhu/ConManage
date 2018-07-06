import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notifications: service('notification-messages'),
  actions:
  {
    submit:function()
    {
      // this.get('notifications').warning('You need to SignUp to access BookStore',{
      //   autoClear:false,
      //   clearDuration: 1200
      // });
      alert('You need to SignUp to access BookStore');
     this.transitionToRoute("login");
    }
  }
});
