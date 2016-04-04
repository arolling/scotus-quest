import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      query: this.store.findRecord('query', params.query_id),
      tags: this.store.findAll('tag')
    });
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
    },

    addNewTags(query, params){
      var tagArray = params.split(', ');
      var model = this.currentModel;
      for(var i=0; i < tagArray.length; i++){
        var tagString = tagArray[i];
        var tagParams = {
          words: tagString
        };
        var alreadyTagged = false;
        model.tags.forEach(function(currentTag){
          if(currentTag.get('words') === tagString){
            query.get('tags').addObject(currentTag);
            alreadyTagged = true;
            currentTag.save().then(function(){
              query.save();
            });
          }
        });
        if(!alreadyTagged){
          var newTag = this.store.createRecord('tag', tagParams);
          query.get('tags').addObject(newTag);
          newTag.save().then(function(){
            query.save();
          });
        }
      }
    },

    addAnswer(params){
      var answer = this.store.createRecord('answer', params);
      var question = params.query;
      question.get('answers').addObject(answer);
      answer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
