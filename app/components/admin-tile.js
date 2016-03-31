import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    delete(blogpost) {
      if (confirm('Are you sure you want to delete this blogpost?')) {
        this.sendAction('destroyBlogpost', blogpost);
      }  
      }
    }
});
