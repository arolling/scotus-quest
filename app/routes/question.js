import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('query', params.query_id);
  },
  actions: {
    editQuery(query, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          query.set(key, params[key]);
        }
      });
      query.save();
      this.transitionTo('question', query.id);
    },

    delete(query){
      query.destroyRecord();
      this.transitionTo('index');
    }
  }
});
