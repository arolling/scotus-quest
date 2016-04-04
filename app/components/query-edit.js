import Ember from 'ember';

export default Ember.Component.extend({
  seeEditForm: false,
  seeAddTags: false,
  actions: {
    editForm(){
      this.set('seeEditForm', true);
    },
    tagForm(){
      this.set('seeAddTags', true);
    },

    addTags(query){
      var params = this.get('newTags');
      this.set('seeAddTags', false);
      this.sendAction('addNewTags', query, params);
    },

    submitEdit(query){
      var params = {
        supplicant: this.get('supplicant'),
        plea: this.get('plea'),
        details: this.get('details')
      };

      this.set('seeEditForm', false);
      this.sendAction('editQuery', query, params);
    },

    deleteQuery(query){
      if(confirm("Delete this question forever?")){
        this.sendAction("delete", query);
      }
    }
  }
});
