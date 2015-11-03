import Ember from 'ember';

export default Ember.Controller.extend({
  genders: Ember.computed(function() {
    return [{
      id: 'M',
      text: 'M',
      value: 'M',
    }, {
      id: 'F',
      text: 'F',
      value: 'F',
    }];
  }),

  actions: {
    addPlayer() {
      const firstName = this.get('firstName');
      const lastName = this.get('lastName');
      const gender = this.get('gender.value');
      const birthday = this.get('birthday');
      const club = this.get('club');

      this.set('isAdding', true);
      this.store.createRecord('participant', {
        firstName, lastName, gender, birthday, club,
      }).save().then(participant => {
        this.set('isAdding', false);
        console.log('participant');
        console.log(participant);
      });
    },
  },
});
