import React, { Component } from 'react'

class HoverTwo extends Component {
  render() {
    const {count, clickToincrease}=this.props
    return (
        
      <div>
       
        <span> Hover the mouse please{this.props.count} </span>
        <button onMouseOver={clickToincrease}>+ {count}</button>
      </div>
    )
  }
}

export default HoverTwo
