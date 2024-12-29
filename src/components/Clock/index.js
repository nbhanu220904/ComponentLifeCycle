import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  render() {
    const {date} = this.state
    console.log(date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock </h1>
        <p className="date">{date.toLocaleDateString()}</p>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
