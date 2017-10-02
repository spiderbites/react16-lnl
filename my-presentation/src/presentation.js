// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  ComponentPlayground,
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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
	primary: "#042B35",
	secondary: "#D2A03E",
	tertiary: "#FD853D",
	quartenary: "#A7A7A7",
}, {
	primary: "Menlo"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React 16.0
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            some things you might wanna know
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The things</Heading>
          <List>
            <ListItem>Fragments</ListItem>
            <ListItem>Error Boundaries</ListItem>
            <ListItem>Portals</ListItem>
            <ListItem>Support for custom DOM attributes</ListItem>
            <ListItem>Improved server-side rendering</ListItem>
            <ListItem>Reduced file size</ListItem>
            <ListItem>License</ListItem>
            <ListItem>Fiber</ListItem>
            <ListItem>Depcrecations</ListItem>
            <ListItem>An upgrading example...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <ComponentPlayground
              theme="dark"
            />
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
