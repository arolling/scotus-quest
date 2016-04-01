import Ember from 'ember';

export function hasAnswers(params) {
  var query = params[0];
  if(query.get('answers').get('length') > 0){
    return Ember.String.htmlSafe('<span class="badge">' + query.get('answers').get('length') + '</span>');
  }
}

export default Ember.Helper.helper(hasAnswers);
