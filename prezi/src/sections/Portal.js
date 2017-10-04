import React from 'react'
import ReactDOM from 'react-dom'
import './Portal.css'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const code = `
class Toast extends React.Component {
  constructor(props) {
    super(props)
    this.root = document.getElementById('portal')
  }

  render() {
    return ReactDOM.createPortal(
      <div className='toast' onClick={this.props.onClick}>
        {this.props.children}
      </div>,
      this.root
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showToast: false,
      clicks: ''
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
    this.toastClicked = this.toastClicked.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown);
  }


  // React Live doesn't seem to like { ...prevState } notation

  open () {
    this.setState(prevState => ({ clicks: prevState.clicks, showToast: true }))
  }

  close () {
    this.setState(prevState => ({ clicks: prevState.clicks, showToast: false }))
  }

  handleKeydown (e) {
    if (e.keyCode === 27 && this.state.showToast) {
      this.close()
    }
  }

  toastClicked () {
    this.setState(prevState => {
      return {
        ...prevState,
        clicks: prevState.clicks + '🍞'
      }
    })
  }


  render () {
    return (
      <div>
        <button onClick={this.open}>Click</button>
        <div>{this.state.clicks}</div>
        { this.state.showToast ? <Toast onClick={this.toastClicked}>Toasty</Toast> : null }
      </div>
    )
  }
}

render(<App />)

`

const PortalExample = () => (
  <LiveProvider code={code} scope={{React: React, ReactDOM: ReactDOM}} noInline>
    <h4>Portals</h4>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default PortalExample
