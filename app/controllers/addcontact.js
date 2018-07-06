import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save()
    {
      let newmodel=this.get('model');
	  	let len=this.get('store').findAll('contact').then(res => {
			return res.get('lastObject').get('id');
	   	}).then(res =>{
		    	var length=1+parseInt(res);
          newmodel.id=length;
			    this.get('store').createRecord('contact',newmodel).save();
		});
       alert("Contact Added Successfully");
       this.transitionToRoute("contacts");
    }
  }
});
