import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('query');
  },

  actions: {
    addQuery(params){
      var newQuestion = this.store.createRecord('query', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
