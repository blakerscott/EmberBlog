import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blogpost');
  },

  actions: {
    save3(params) {
      var newBlogpost = this.store.createRecord('blogpost', params);
      newBlogpost.save();
      this.transitionTo('admin');
    },

    destroyBlogpost(blogpost) {
      blogpost.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
