import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritecolor: "red",
            username: ''
        };
      }
      Displayinputs=(event)=>{
        this.setState(
            {
                username: event.target.value
            }
        )
      }
      componentDidMount() {
          this.setState({favoritecolor: "yellow"})
        
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
      }
      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
      render() {
        return (
          <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
            <input type='text' onChange={this.Displayinputs} />
            <h1>Hello devs; .... {this.state.username}</h1>
          </div>
        );
      }
}

export default LifecycleA
