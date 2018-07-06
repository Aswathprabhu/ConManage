import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save()
    {
      let newbook=this.get('model');
      var _this=this;
      this.get('store').findAll('book').then(res => {
        console.log(res);
      return res;
    }).then(res=>
    {
      let flag=0;
      for(var i=0;i<res.length;i++)
      {
        if(res.content[i]._data.author===newbook.author)
        {
          flag=1;
        }
      }
      if(flag===0)
      {
        alert("Please add the Author first");
        this.transitionToRoute("newauthor");
      }
      else {
        {
            var newrecord=this.get('store').createRecord('book',newbook).save();
            alert("Book added successfully");
            this.transitionToRoute("books");
        }
      }
    });

    }
  }
});
