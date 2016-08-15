import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement'); // important to make this singular!
  }
});
