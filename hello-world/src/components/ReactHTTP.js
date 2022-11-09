import React, { Component } from 'react'
import axios from 'axios'

class ReactHTTP extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         msgError: ''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(response=>{
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error=>{
            console.log('error') 
            this.setState({
                msgError: 'Error occured !'
            })

        })
    }
    
  render() {
    const {posts, msgError}=this.state
    return (
      <div>
        HTTP Devs
        {
            posts.length?
            posts.map(post=><div key={post.id}>{post.title}</div>):
            null
        }
        {
            msgError?<div>{msgError}</div>:
            null
        }
      </div>
    )
  }
}

export default ReactHTTP
