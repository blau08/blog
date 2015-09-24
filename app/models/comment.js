import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  response: DS.attr(),
  post: DS.belongsTo('post', {async: true}),
});
