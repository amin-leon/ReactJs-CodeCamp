import React from "react";

const Greet=(props) =>{
    const {name, heroName}=props// destructuring in functional components
    return (
    <div>
         <h1>Hello {name} and Hero name: {heroName}</h1>
         {props.children}
    </div>
   
    )
}
export default Greet