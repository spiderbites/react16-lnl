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
  ];
}

`

const Fragments = () => (
  <LiveProvider code={code}>
    <h4>Fragments</h4>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default Fragments
