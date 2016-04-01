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

      for(var i=0; i < tagArray.length; i++){
        var tagString = tagArray[i];
        var tagParams = {
          words: tagString
        };
        // this.store.queryRecord('tag', { filter: { words: tagString } }).then(function(foundTag) {
        //   console.log(foundTag);
          var newTag = this.store.createRecord('tag', tagParams);
          console.log(newTag);
          newTag.save();
          newQuestion.get('tags').addObject(newTag);
        //});
      }
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
