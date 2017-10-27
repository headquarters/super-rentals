import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',
  init() {
    this._super(...arguments);
    // this is tricky because we're setting the property "results" that list-filter.hb handlebars file is going to reference
    // call it initially with an empty value
    this.get('filter')('')
      .then(({ results }) => {
        this.set('results', results)
      });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue)
        .then(({ query, results }) => {
          if (query === this.get('value')) {
            this.set('results', results)
          }          
        });
    }
  }
});
