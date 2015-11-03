import DS from 'ember-data';
const attr = DS.attr;
const belongsTo = DS.belongsTo;

export default DS.Model.extend({
  score: attr('number'),
  isEmpty: attr('boolean'),
  stat: belongsTo('stat'),
  participant: belongsTo('participant'),
  session: belongsTo('session'),
  curriculum: belongsTo('curriculum'),
  group: belongsTo('group'),
});
