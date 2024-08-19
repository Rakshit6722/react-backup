import React from 'react'

function Count({text,count}) {

    console.log(`rendering ${text}`)
  return (
    <div>
        <h3>{count}</h3>
    </div>
  )
}

export default React.memo(Count)
