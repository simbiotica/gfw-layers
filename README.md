# Problems found

## Presenter and events

model.on('change', callback) won't be triggered for nested attributes.

Assuming that your nested attributes are a modest size, we can use Underscore.js’s handy _.clone() method. This method returns a shallow-clone of the specified object.

var updatedName = _.clone(myInfo.get("name"));
updatedName.first = "Kazuhiro";
myInfo.set("name", updatedName);

Source: http://www.crittercism.com/blog/nested-attributes-in-backbone-js-models/

## Backbone inheritance

http://www.erichynds.com/blog/backbone-and-inheritance

app.models.layersPresenter.setAttr('forestChange', 'loss', true);
app.models.layersPresenter.setAttr('forestCover', 'forest', true);