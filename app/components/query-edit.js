import Ember from 'ember';

export default Ember.Component.extend({
  seeEditForm: false,
  actions: {
    editForm(){
      this.set('seeEditForm', true);
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
