import Ember from 'ember';

export default Ember.Component.extend({
  seeQueryForm: false,
  actions: {
    seeForm(){
      this.set('seeQueryForm', true);
    },

    submitQuestion(){
      var params = {
        supplicant: this.get('supplicant') ? this.get('supplicant') : "",
        plea: this.get('plea') ? this.get('plea') : "",
        details: this.get('details') ? this.get('details') : "",
        tags: this.get('tags') ? this.get('tags') : ""
      };
      this.set('supplicant', '');
      this.set('plea', '');
      this.set('details', '');
      this.set('tags', '');
      this.set('seeQueryForm', false);
      this.sendAction('newQuery', params);
    }
  }
});
