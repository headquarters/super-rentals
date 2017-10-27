import DS from 'ember-data';

export default DS.Model.extend({
  bedrooms: DS.attr(),
  city: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  owner: DS.attr(),
  propertyType: DS.attr(),
  title: DS.attr()
});
