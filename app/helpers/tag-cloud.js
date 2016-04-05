import Ember from 'ember';

export function tagCloud(params) {
  var thisTag = params[0];
  if (thisTag.get('queries').get('length') <= 1) {
    return Ember.String.htmlSafe("<span class='x-small-tag'>#" + thisTag.get('words') + "</span>");
  } else if (thisTag.get('queries').get('length') <= 3) {
    return Ember.String.htmlSafe("<span class='small-tag'>#" + thisTag.get('words') + "</span>");
  } else if (thisTag.get('queries').get('length') <= 6) {
    return Ember.String.htmlSafe("<span class='med-tag'>#" + thisTag.get('words') + "</span>");
  } else {
    return Ember.String.htmlSafe("<span class='lg-tag'>#" + thisTag.get('words') + "</span>");

  }
}

export default Ember.Helper.helper(tagCloud);
