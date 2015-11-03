import DS from 'ember-data';
const attr = DS.attr;
const hasMany = DS.hasMany;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  street: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('string'),
  stripe: attr('string'),
  password: attr('string'),
  cards: hasMany('card'),
  participants: hasMany('participant'),
  registrations: hasMany('registration'),
});
