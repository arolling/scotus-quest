import DS from 'ember-data';

export default DS.Model.extend({
  supplicant: DS.attr(),
  plea: DS.attr(),
  details: DS.attr(),
  posted: DS.attr('date', {
    defaultValue() { return new Date();}
  }),
  answers: DS.hasMany('answer', {async:true})

});
