## Fragments

- return arrays in render
- no longer need to wrap elements in a single parent in each component
- cleans up your DOM
- ex. tables? lists?

- also can now return strings from render without needing to wrap in e.g. span

## Error Boundaries
- like try/catch for components
- lifecycle hook: componentDidCatch
- previously, if there was an uncaught error React would emit strange errors on the following render cycle, such as these fine ditties
  - "Cannot read property 'getHostNode' of null"
  - "TypeError: Cannot read property '_currentElement' of null"
  - Error: performUpdateIfNecessary: Unexpected batch number (current 36, pending 31)(...)
- in react 16 uncaught errors result in whole umounting of component tree and they offer a way of handling errors more gracefully, e.g.


- "Error Boundary"
  - catches javascript errors anywhere in child component tree
  - logs errors
  - render fallback UI
- make a re-usable ErrorBoundary component
- componentDidCatch(error, info)

- gotchas:
  - catches errors thrown in render, constructor & lifecycle methods
  - doesn't catch errors in event handlers EXCEPT if it's in a setState call in an error handler

## Portals

ReactDOM.createPortal(
  element,
  targetContainer
)

ReactDOM.createPortal(
  <div>Portal Content</div>,
  document.getElementById('portal-container')
)

* Use for overlays, modals, tooltips

## Support for custom DOM attributes
* reminder of why we use react's weird attribute naming in the first place...  "Additionally React needs to know specific information about the properties so it can do efficient diffing (i.e. the style property is diffed differently than className) and perform the correct DOM manipulation (using attributes vs properties)."

## Improved server-side rendering

## Reduced file size

## License

## Fiber

## Depcrecations
- addons e.g. react-addons-perf
- 15.x deprecations no longer available directly e.g. React.createClass and React.PropTypes.  Use standalone packages instead
