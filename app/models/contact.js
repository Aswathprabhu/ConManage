import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  dob:DS.attr('date'),
  phone: DS.attr('number'),
  email: DS.attr('string'),
  company:DS.attr('string')

});
