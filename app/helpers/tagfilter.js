import Ember from 'ember';

export function tagfilter(params) {
  var query = params[0];
  console.log(query);
  if(query.get('tags').get('length') > 0){
    return Ember.String.htmlSafe('Tags: ');
  }
}

export default Ember.Helper.helper(tagfilter);
//should be named has-tags
