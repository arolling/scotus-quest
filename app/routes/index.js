import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      queries: this.store.findAll('query'),
      tags: this.store.findAll('tag')
    });
  },

  actions: {
    addQuery(params){
      var tagArray = params.tags.split(', ');
      delete params.tags;
      console.log(tagArray);
      console.log(params);
      var newQuestion = this.store.createRecord('query', params);
      var model = this.currentModel;
      for(var i=0; i < tagArray.length; i++){
        var tagString = tagArray[i];
        var tagParams = {
          words: tagString
        };
        var alreadyTagged = false;
        model.tags.forEach(function(currentTag){
          if(currentTag.get('words') === tagString){
            newQuestion.get('tags').addObject(currentTag);
            alreadyTagged = true;
          }
        });
        if(!alreadyTagged){
          var newTag = this.store.createRecord('tag', tagParams);
          console.log(newTag);
          newTag.save();
          newQuestion.get('tags').addObject(newTag);
        }
      }
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
