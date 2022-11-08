import React, { Component } from 'react'
import updateComponent from './HOC'
class CounterNumbers extends Component {
  render() {
    const {count, clickToincrease}= this.props
    return (
      <div>
        <h3>Click to increament</h3>
        <span>{this.state.count} </span>
        <button onClick={this.clickToincrease}>+ {count}</button>
      </div>
    )
  }
}

export default updateComponent(CounterNumbers)
