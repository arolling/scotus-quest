import DS from 'ember-data';

export default DS.Model.extend({
  respondent: DS.attr(),
  response: DS.attr(),
  posted: DS.attr('date', {
    defaultValue() { return new Date();}
  }),
  query: DS.belongsTo('query', {async: true})

});
