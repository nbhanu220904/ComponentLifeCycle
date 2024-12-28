import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button type="button" className="toggle-button">
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        <Clock />
      </div>
    )
  }
}

export default App
