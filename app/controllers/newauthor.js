import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    save()
    {
      let newauthor=this.get('model');
      var newrecord=this.get('store').createRecord('author',newauthor).save();
    }
  }
});
