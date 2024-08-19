import React from 'react'

function Title() {
    console.log('rendering title')
  return (
    <div>
      <h2>Set Age and Salary</h2>
    </div>
  )
}

export default React.memo(Title)
