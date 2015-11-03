import DS from 'ember-data';
const attr = DS.attr;
const belongsTo = DS.belongsTo;

export default DS.Model.extend({
  score: attr('number'),
  accuracy: attr('number'),
  participant: belongsTo('participant'),
  curriculum: belongsTo('curriculum'),
  session: belongsTo('session'),
});
