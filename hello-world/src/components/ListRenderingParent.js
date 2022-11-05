import React from 'react'
import Child from './ListRenderingChild'

function ListRenderingParent() {
    const ParentDetails=[
        {
            id:1,
            name: 'Ketty',
            age:49,
        },
        {
            id:2,
            name: 'Keza',
            age:66,
        },
        {
            id:3,
            name: 'Kaliza',
            age:60,
        }
    ]
    const AllParent=ParentDetails.map(parent =>(<Child key={parent.id} parent={parent}/>))

  return (
    <div>
      {AllParent}
    </div>
  )
}

export default ListRenderingParent
