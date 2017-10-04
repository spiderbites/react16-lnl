import React from 'react';
import './normalize.css';
import './skeleton.css';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  Fragments,
  ErrorBoundary,
  Portal
} from './sections'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div style={{display: 'flex'}}>
            <ul className='nav'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/fragments">Fragments</Link></li>
              <li><Link to="/error">Error Boundaries</Link> </li>
              <li><Link to="/portals">Portals</Link></li>
              <li><Link to="/support">Support for custom DOM attributes</Link></li>
              <li><Link to="/ssr">Improved server-side rendering</Link></li>
              <li><Link to="/filesize">Reduced file size</Link></li>
              <li><Link to="/license">License</Link></li>
              <li><Link to="/fiber">Fiber</Link></li>
              <li><Link to="/deprecations">Deprecations</Link></li>
              <li><Link to="/upgrading">An upgrading example...</Link></li>
            </ul>

            <div className='body'>
              <Route exact path="/" render={() => <h4>react 16 🎂 </h4>} />
              <Route path="/fragments" component={Fragments} />
              <Route path="/error" component={ErrorBoundary} />
              <Route path="/portals" component={Portal} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
