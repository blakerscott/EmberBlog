import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr(),
    title: DS.attr(),
    artist: DS.attr(),
    catagory: DS.attr(),
    article: DS.attr(),
    image: DS.attr()
});
