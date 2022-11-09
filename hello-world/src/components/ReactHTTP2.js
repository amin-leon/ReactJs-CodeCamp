import React, { Component } from 'react'
import axios from 'axios'
class ReactHTTP2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userId: '',
        title: '',
        body: ''
      }
    }
    CheckToSubmit=(event)=>{
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }
    SendToApi=(event)=>{
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
  render() {
    const {userId, title, body}=this.state
    return (
      <form onSubmit={this.SendToApi}>
        <input type='text' name='userId' value={userId} onChange={this.CheckToSubmit}/><br />
        <input type='text' name='title' value={title} onChange={this.CheckToSubmit}/><br />
        <input type='text' name='body' value={body} onChange={this.CheckToSubmit}/><br />
        <button type='submit'>Send</button>
      </form>
    )
  }
}

export default ReactHTTP2
