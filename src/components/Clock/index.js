import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  //   constructor(props) {
  //     super(props)
  //     this.state = {date: new Date()}
  //     this.state = {date: props.date}
  //     console.log('Constructor called.')
  // }

  //   componentWillMount() {
  componentDidMount = () => {
    console.log('componentDidMount called')
    this.timerId = setInterval(this.tick, 1000)
  }

  //   componentWillUnmount() {
  componentWillUnmount = () => {
    console.log('componentWillUnmount called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  //   render() {
  render = () => {
    const {date} = this.state
    console.log('Render called', date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock
