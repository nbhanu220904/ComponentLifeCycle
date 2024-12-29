import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

<<<<<<< HEAD
  render() {
    const {showClock} = this.state
    onToggleClock = () => {
      this.setState(prevState => {
        const {showClock} = prevState
        return {showClock: !showClock}
      })
    }
=======
  onToggleClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {showClock: !showClock}
    })
  }

  render() {
    const {showClock} = this.state
>>>>>>> Fourth Commit

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        <Clock />
      </div>
    )
  }
}

export default App
