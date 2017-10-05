import React from 'react'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const code = `
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: { name: 'twig' }
    }
    this.clearUser = this.clearUser.bind(this)
  }

  clearUser () {
    this.setState({ user: null })
  }

  render () {
    return (
      <div>
        <Bound>
          <User user={this.state.user} />
        </Bound>
        <button onClick={this.clearUser}>💣</button>
      </div>
    )
  }
}

const User = (props) => (
  <div>{props.user.name}</div>
)

class Bound extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true, error, info })
  }

  render () {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Error!... refresh the page or something...</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.info.componentStack}
          </details>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

render(<App />)

`

const ErrorBoundary = () => (
  <LiveProvider code={code} noInline>
    <h4>Error Boundaries</h4>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default ErrorBoundary
