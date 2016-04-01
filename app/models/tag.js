import DS from 'ember-data';

export default DS.Model.extend({
  words: DS.attr(),
  queries: DS.hasMany('query', {async: true})
});
