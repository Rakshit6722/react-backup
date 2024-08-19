import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const[num1,setNum1] = useState(0);
  const[num2,setNum2] = useState(0);
  const[num3,setNum3] = useState(0);
  const[Add,setAdd] = useState(0);



  return (
    <>
      <div className='container'>
        <div className='heading_text'>
          <h1 className='heading_one'>Simple Calculator</h1>
          <p>Calculate your simple interest</p>
        </div>
      </div>

      <div className='total_amount_card'>
        <div className='card_text'>
          <h3 className='total_amont_heading'>Rs. {Add}</h3>
          <p className='total_amount_para'>Total Simple Interest</p>
        </div>
      </div>
    </>
  )
}

export default App
