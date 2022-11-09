import React, { Component } from 'react'

class ClickTwo extends Component {
  render() {
    const {count, clickToincrease}=this.props
    return (
      <div>
        <h3>Click to increament</h3>
        <span>{this.props.count} </span>
        <button onClick={clickToincrease}>+ {count}</button>
      </div>
    )
  }
}

export default ClickTwo
