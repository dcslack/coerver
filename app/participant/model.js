import DS from 'ember-data';
const attr = DS.attr;
const belongsTo = DS.hasMany;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  gender: attr('string'),
  birthday: attr('date'),
});
