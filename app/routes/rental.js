import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id); // locate the single rental record we've requested
  },
  actions: {
    update(rental, params) {
      Object.keys(params).forEach(function(key) { // For each key in the params,
        if(params[key] !== undefined) { // if it is not undefined,
          rental.set(key, params[key]); // take the rental and set the property that matches the current key to the value of the current key
        }
      });
      rental.save(); // after looping through all of the keys, save the rental
      this.transitionTo('index'); // transition to the index route
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
