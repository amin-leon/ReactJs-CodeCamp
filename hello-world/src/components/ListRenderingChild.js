import React from 'react'

function Child({parent}) {
  return (
    <div>
      <h1>My mother's name is:{parent.name} and Her age: {parent.age}</h1>
    </div>
  )
}

export default Child
