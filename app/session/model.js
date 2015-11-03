import DS from 'ember-data';
const attr = DS.attr;
const belongsTo = DS.belongsTo;
const hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  location: attr('string'),
  street: attr('string'),
  state: attr('string'),
  city: attr('string'),
  zip: attr('string'),
  startDate: attr('string'),
  endDate: attr('string'),
  program: belongsTo('program'),
  curriculums: hasMany('curriculum'),
});
