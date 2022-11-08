import React from 'react'

const updateComponent = (orginalComponent) =>{
    class newComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          clickToincrease=()=>{
              this.setState( prevState =>{
                  return {count: prevState.count +1}
              })
              }
       render(){
        return <orginalComponent count={this.state.count}  clickToincrease={this.clickToincrease}/>
       }
    }
    return newComponent
}
export default updateComponent