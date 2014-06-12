# Problems found

## Presenter and events

When updating presenter model, you need to call presenter.spread() to trigger events.

## Improve canvas performance

Caching processed canvas image data makes the render smother but will break eventually of lack of memory. Tested with underscore memoize.

Another ideas: 
  - We could proccess those filters on the server and cache them.
  - Use workers to proccess just some images on the background. For example those for the timeline, so when the user plays the animation, it could be already loaded. (http://www.html5rocks.com/en/tutorials/workers/basics/)