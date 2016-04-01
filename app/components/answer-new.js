import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addAnswer(){
      var params = {
        respondent: this.get('respondent') ? this.get('respondent') : "",
        response: this.get('response') ? this.get('response') : "",
        query: this.get('query')
      };
      this.set('respondent', '');
      this.set('response', '');
      this.sendAction("submitAnswer", params);
    }
  }
});
