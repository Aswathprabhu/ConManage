import Service from '@ember/service';

export default Service.extend({
     items:null,
     // datas:[{
     //   id:1,
     //   name:"Aswath",
     //   dob:"07.12.97",
     //   phone:"9952434420",
     //   email:"aswath@gmail.com",
     //   company:"Zoho"
     // },
     // {
     //   id:2,
     //   name:"Aswath",
     //   dob:"07.12.97",
     //   phone:"9952434420",
     //   email:"aswath@gmail.com",
     //   company:"Zoho"
     // },
     // {
     //   id:3,
     //   name:"Aswath",
     //   dob:"07.12.97",
     //   phone:"9952434420",
     //   email:"aswath@gmail.com",
     //   company:"Zoho"
     // }],
     init(){
       this._super(...arguments);
       //alert(this.get('datas'));
       this.set('items',[]);
     },
     add(item) {
       this.get('items').pushObject(item);
     },

     remove(item) {
        this.get('items').removeObject(item);
      },

     empty() {
        this.get('items').clear();
      }
});
