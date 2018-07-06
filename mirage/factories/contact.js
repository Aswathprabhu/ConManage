import Factory from 'ember-cli-mirage';
import Mirage,{faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
   name:faker.name.firstName,
   dob:faker.date.past,
   phone:faker.phone.phoneNumberFormat,
   email:faker.internet.email,
   company:faker.address.country
});
