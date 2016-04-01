import Ember from 'ember';

export default Ember.Component.extend({
  seeQueryForm: false,
  actions: {
    seeForm(){
      this.set('seeQueryForm', true);
    },

    submitQuestion(){
      var params = {
        supplicant: this.get('supplicant'),
        plea: this.get('plea'),
        details: this.get('details')
      };
      document.getElementById('addQueryForm').reset();
      this.set('seeQueryForm', false);
      this.sendAction('newQuery', params);
    }
  }
});
