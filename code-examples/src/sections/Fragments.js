import React from 'react';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const code = `
const Fragments = () => {
  // No need to wrap list items in an extra element!
  return [
    // Don't forget the keys :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ]
}

`

const code2 = `
const StringFragment = () => {
  // Return strings directly!
  return "yep yep"
}

`

const Fragments = () => (
  <div>
    <h4>Fragments</h4>
    <p>You can now return an array of elements from a component’s render method. Like with other arrays, you’ll need to add a key to each element to avoid the key warning. We've also added support for returning strings. In the future, they'll likely add a special fragment syntax to JSX that doesn’t require keys (for static lists).</p>
    <LiveProvider code={code}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
    <LiveProvider code={code2}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </div>
)

export default Fragments
