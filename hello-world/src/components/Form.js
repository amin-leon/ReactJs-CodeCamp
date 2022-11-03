
import React from 'react';
 
// Input field component
const Input=()=>
{
    return(
        <div>
            <input type="text" placeholder="Enter Text.." />
            <br />
            <br />   
        </div>
    );
}
 
// Button Component
const Button=()=>
{
    return <button type = "submit">Submit</button>;   
}
 
// Form component
const Form=()=>
{
    return (
        <div>
            <Input />
            <Input />
            <Button />           
        </div>
    );
}
export default Form