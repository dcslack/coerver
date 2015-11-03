import DS from 'ember-data';
const attr = DS.attr;
const belongsTo = DS.belongsTo;

export default DS.Model.extend({
  stripe: attr('string'),
  fullPrice: attr('number'),
  isFullyPaid: attr('boolean'),
  session: belongsTo('session'),
  participant: belongsTo('participant'),
  downPayment: belongsTo('payment'),
  secondPayment: belongsTo('payment'),
  curriculum: belongsTo('curriculum'),
});
