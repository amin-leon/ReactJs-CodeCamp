 import React, { Component } from 'react'
import Form from './Form'
 
 class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
      }
    }
    onChangeHandler=(event)=>{
        this.setState({
            username: event.target.value
        })
    }

    onChangeHandlerComment=(event) =>{
        this.setState(
            {
                comments: event.target.value
            }
        )
    }

    Sub=(event)=>{
        alert(`${this.state.username} ${this.state.comments}`)
        event.preventDefault();
    }
    
   render() {
     return (
      <form onSubmit={this.Sub}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.onChangeHandler}></input>
        </div>
        <div>
            <textarea value={this.state.comments}  onChange={this.onChangeHandlerComment} placeholder='Enter your comments....'></textarea>

        </div>
        <button>Submit</button>
      </form>
     )
   }
 }
 
 export default Forms
 