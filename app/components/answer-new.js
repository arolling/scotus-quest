import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addAnswer(){
      var params = {
        respondent: this.get('respondent'),
        response: this.get('response'),
        query: this.get('query')
      };
      this.set('respondent', '');
      this.set('response', '');
      console.log(params);
      this.sendAction("submitAnswer", params);
    }
  }
});
