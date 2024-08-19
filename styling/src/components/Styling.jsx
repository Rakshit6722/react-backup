import React from 'react'
import './myStyle.css'


function Styling(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
      <div>
        <h1 className={`${className} font-xl`}>Hello again</h1>
      </div>
    </div>
  )
}

export default Styling
