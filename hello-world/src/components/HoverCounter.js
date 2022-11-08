import React, { Component } from 'react'
import updateComponent from './HOC'

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onMouseOver={this.clickToincrease}>Hover Me{this.props.name}</button>
      </div>
    )
  }
}

export default updateComponent(HoverCounter)
