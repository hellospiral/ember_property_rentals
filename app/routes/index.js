import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },

    update(rental, params) {
      Object.keys(params).forEach(function(key) { // For each key in the params,
        if(params[key]!==undefined) { // if it is not undefined,
          rental.set(key, params[key]); // take the rental and set the property that matches the current key to the value of the current key
        }
      });
      rental.save(); // after looping through all of the keys, save the rental
      this.transitionTo('index'); // transition to the index route
    }
  }
});
