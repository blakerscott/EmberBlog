import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlogpost: false,
  actions: {
  blogpostFormShow() {
    this.set('addNewBlogpost', true);
  },

  save1() {
    var params = {
      date: this.get('date'),
      title: this.get('title'),
      artist: this.get('artist'),
      catagory: this.get('catagory'),
      article: this.get('article'),
      image: this.get('image'),
    };
    this.set('addNewBlogpost', false);
    this.sendAction('save2', params);
    }
  }
});
