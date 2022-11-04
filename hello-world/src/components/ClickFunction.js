import React from 'react'

function ClickFunction() {
    function ClickMe(){
        console.log('Successful Clicked')
    }
  return (
    <div>
      <button onClick={ClickMe}>Click Me</button>
    </div>
  )
}

export default ClickFunction
