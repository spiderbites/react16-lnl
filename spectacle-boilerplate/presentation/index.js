// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
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

// examples
const size = require('raw-loader!./size.example')
const dom = require('raw-loader!./dom.example')
const errors = require('raw-loader!./errors.example')

// images
const propTypes = require('../assets/prop-types-error.png')
const genome1 = require('../assets/genome-1.png')
const genome2 = require('../assets/genome-2.png')
const no = require('../assets/no.png')
const westmount1 = require('../assets/westmount-1.png')
const westmount2 = require('../assets/westmount-2.png')
const twg1 = require('../assets/twg-website-upgrade/1.png')
const twg2 = require('../assets/twg-website-upgrade/2.png')
const twg3 = require('../assets/twg-website-upgrade/3.png')
const twg4 = require('../assets/twg-website-upgrade/4.png')
const twg5 = require('../assets/twg-website-upgrade/5.png')
const twg6 = require('../assets/twg-website-upgrade/6.png')
const twg7 = require('../assets/twg-website-upgrade/7.png')
const twg8 = require('../assets/twg-website-upgrade/8.png')

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
            <ListItem>Known as React Fiber while in development</ListItem>
            <ListItem>Complete re-write of the core rendering engine</ListItem>
            <ListItem>Maintained almost total compatiblity with previous API</ListItem>
            <ListItem>New engine enables async rendering for better "perceived performance"</ListItem>
            <ListItem>But most of those improvements </ListItem>
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
        <Slide transition={["fade"]} bgColor="quartenary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            Warnings in React 15.5 are now Errors are in React 16
          </Heading>
          <img src={propTypes} />
          <Text textColor="primary">Use react-codemod and jscodeshift to auto convert your code!</Text>
        </Slide>
        <Slide transition={["fade"]} textColor="primary">
          <Text textColor="secondary">New features: support for custom DOM attributes</Text>
          <br />
          <Text textColor="secondary">2 reasons...</Text>
          <List ordered textColor="tertiary">
            <ListItem padding="20" textSize="20">Passing custom attributes e.g. (some random example i found) node-webkit supports a custom attribute "nwdirectory" on &lt; input type="file"/ &gt; s, that allow you to select folders.  Previously React would strip this, need a hacky workaround.</ListItem>
            <ListItem padding="20" textSize="20">Reduced bundle size by shrinking attribute whitelist</ListItem>
          </List>
          <CodePane lang="bash" source={dom} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary">Error Boundaries!</Text>
          <CodePane lang="bash" source={errors} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary">-> just go to other thing</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary">Upgrading!</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Attempt 1 - Splashlight Image Genome Web
            </Heading>
          </Appear>
          <Appear fid="2">
            <img src={genome1} height='250' />
          </Appear>
          <Appear fid="3">
            <img src={genome2} height='250' />
          </Appear>
          <Appear fid="3">
            <img src={no} height='250' />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Attempt 2 - Westmount Protect Portal
            </Heading>
          </Appear>
          <Appear fid="2">
            <img src={westmount1} height='250' />
          </Appear>
          <Appear fid="3">
            <img src={westmount2} height='250' />
          </Appear>
          <Appear fid="3">
            <img src={no} height='250' />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit textColor="primary">
            Attempt 3 - TWG Website!
          </Heading>
          <img src={twg1} height='500' />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit textColor="primary">
            Attempt 3 - TWG Website!
          </Heading>
          <img src={twg2} height='400' />
          <p>proptypes?</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit textColor="primary">
            Attempt 3 - TWG Website!
          </Heading>
          <img src={twg3} height='400' />
          <p>codeshift!</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit textColor="primary">
            Attempt 3 - TWG Website!
          </Heading>
          <img src={twg4} height='400' />
          <p>upgrade some things</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit textColor="primary">
            Attempt 3 - TWG Website!
          </Heading>
          <img src={twg5} height='400' />
          <p>no custom attrs in react 15</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit textColor="primary">
            Attempt 3 - TWG Website!
          </Heading>
          <img src={twg6} height='400' />
          <p>custom attrs errors in react 15</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit textColor="primary">
            Attempt 3 - TWG Website!
          </Heading>
          <img src={twg7} height='400' />
          <p>custom attrs in react 16 are there!</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit textColor="primary">
            Attempt 3 - TWG Website!
          </Heading>
          <img src={twg8} height='400' />
          <p>¯\_(ツ)_/¯</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <a href='https://github.com/koba04/react-fiber-resources'>https://github.com/koba04/react-fiber-resources</a>
          <a href='https://koba04.github.io/react-fiber-resources/examples/'>https://koba04.github.io/react-fiber-resources/examples/</a>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary">Also server-side rendering improvements seem huge</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary">✌</Heading>
        </Slide>
      </Deck>
    );
  }
}
