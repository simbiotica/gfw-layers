## Design Pattern

![alt tag](https://s3-eu-west-1.amazonaws.com/uploads-eu.hipchat.com/80556/764228/IPDUgmDgqr1XG3K/Captura%20de%20pantalla%202014-06-13%20a%20la%28s%29%2009.48.07.png)

## Presenter and events

When updating presenter model, you need to call presenter.spread() to trigger events.

## Canvas performance

Caching processed canvas image data makes the render smother but will break eventually of lack of memory. Tested with underscore memoize.

Another ideas: 
  - We could proccess those filters on the server and cache them.
  - Use workers to proccess just some images on the background. For example those for the timeline, so when the user plays the animation, it could be already loaded. (http://www.html5rocks.com/en/tutorials/workers/basics/)