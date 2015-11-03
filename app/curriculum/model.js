import DS from 'ember-data';
const attr = DS.attr;
const hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  skill: attr('number'),
  fullPrice: attr('number'),
  downPayment: attr('number'),
  stats: hasMany('stat'),
});
