import DS from 'ember-data';
const attr = DS.attr;
const belongsTo = DS.belongsTo;

export default DS.Model.extend({
  amount: attr('number'),
  paidOn: attr('date'),
  stripe: attr('string'),
  user: belongsTo('user'),
  card: belongsTo('card'),
});
