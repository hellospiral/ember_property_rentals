import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement'); // important to make this singular!
  },

  actions: {
    delete(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcements');
    },

    save3(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcements');
    }
  }
});
