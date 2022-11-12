import React, {useState} from 'react'

function HooksUseState3() {
    const [name, setName]= useState({firstName: '', secondName:''})
  return (
    <div>
      <input type='text' value={name.firstName} onChange={e =>setName({...name, firstName: e.target.value})} />
      <input type='text' value={name.secondName} onChange={e =>setName({...name, secondName: e.target.value})} />
      <div>
        <h2>Your names are: </h2>
        <h2>First  name: {name.firstName}</h2>
        <h2>Second  name: {name.secondName}</h2>
      </div>
    </div>
  )
}

export default HooksUseState3
