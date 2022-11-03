import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    
    Increment(){
        this.setState({
            count: this.state.count +1
        },
        () =>{
            console.log('callback value', this.state.count)

        })
        
    }
  render() {
    return (
      <div>
        <h3>count-{this.state.count}</h3>
        <button onClick={() => this.Increment()}>Increment +1</button>
      </div>
    )
  }
}

export default Counter
