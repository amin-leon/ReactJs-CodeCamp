import React, { Component } from 'react'
import { UserConsumer } from './CompentsParent'

class ComponentD extends Component {
  render() {
    return (
      
        <UserConsumer>
            {name=>{
                    return <div>Hello {name}</div>
            }}

        </UserConsumer>
       
      
    )
  }
}

export default ComponentD
