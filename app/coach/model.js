import DS from 'ember-data';
const attr = DS.attr;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  phone: attr('string'),
});
