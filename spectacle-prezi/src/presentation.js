// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const size = require('raw-loader!./size.example')

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#DE6361",
  tertiary: "#5EAFEF",
  quartenary: "#282C34",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="quartenary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            React 16
          </Heading>
          <List textColor="tertiary">
            <ListItem>Known as React Fiber in development</ListItem>
            <ListItem>Complete re-write of the core rendering engine</ListItem>
            <ListItem>Maintained almost total compatiblity with previous API</ListItem>
            <ListItem>New engine enables async rendering for better "perceived performance"</ListItem>
            <ListItem>More later...?</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            Today...
          </Heading>
          <List textColor="tertiary">
            <ListItem>Deprecations and high level stuff</ListItem>
            <ListItem>New features w/ code examples- returning fragments, error boundaries, portals</ListItem>
            <ListItem>Glancing over stuff I don't know about</ListItem>
            <ListItem>More about Fiber...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            Package size
          </Heading>
          <Text textColor="primary">25% smaller bundle size</Text>
          <CodePane lang="bash" source={size} />

        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
