import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    authordetail:function(str)
    {

      this.get('store').findAll('author').then(res=>{
        res.forEach((item)=> {

          if(item.name===str)
          {
           this.transitionToRoute("authordetail",item.id);
          }

        });
      });
    }

  }
});
