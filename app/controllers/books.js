import Controller from '@ember/controller';

export default Controller.extend({

  newmodel:[],

  actions:{
    search()
    {
      this.set('model',this.get('newmodel'));
      var title=this.get('title');
      if(title!=="")
      {
      var alteredmodel=[];
      this.get('model').forEach((item)=>{
      if(item.title.toLowerCase().includes(title.toLowerCase()))
      alteredmodel.pushObject(item);});
      this.set('model',alteredmodel);
      }
      else
      this.set('model',this.get('newmodel'));
      }
     }
});
