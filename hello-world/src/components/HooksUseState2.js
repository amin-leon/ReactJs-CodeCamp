import React, {useState} from 'react'

function HooksUseState2() {

    const initialValue=0
    const [count, setValue]= useState(initialValue)


    const incrementByFive=()=>{
        for(let i=0; i<5; i++){
            setValue(PrevState=>PrevState +1)
        }
    }
  return (
    <div>
        <span>{count}</span>
      <button onClick={()=>setValue(initialValue)}>Reset</button>

      <button onClick={()=>setValue(PrevState=>PrevState + 1)}>Increment</button>

      <button onClick={()=>setValue(PrevState=>PrevState - 1)}>Decrement</button>
      <button onClick={incrementByFive}>increment by 5</button>
    </div>
  )
}

export default HooksUseState2
