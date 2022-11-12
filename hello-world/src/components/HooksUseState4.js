import React, {useState} from 'react'

function HooksUseState4() {
    const [items, setItems]=useState([])
    const addItems=()=>{
        setItems([...items, {
            id: items.length,
            value:Math.floor(Math.random()*10) +1
        }])
    }
  return (
    <div>
      <button onClick={addItems}>Add New</button>
      {
        items.map(item=>(<li>{item.value}</li>
        ))
      }
    </div>
  )
}

export default HooksUseState4
