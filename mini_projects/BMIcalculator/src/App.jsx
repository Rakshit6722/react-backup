import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [message,setMessage]=useState('')
  const [bmi,setBmi] = useState('')

  let calBmi = (e) => {
    e.preventDefault();
    if(weight==0 || height==0){
      alert('please enter a valid weight and height')
    }
    else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('you are underweight')
      }
      else if(bmi>=25 && bmi<30){
        setMessage('you are healthy weight')
      }
      else{
        setMessage('your are overweight')
      }
    }
  }

  let reload = () => {
    window.location.reload();
  }

  return (
    <>
      <div className='container'>
        <h2>BMI calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>
              Weight
            </label>
            <input type='text' placeholder='enter weight value' value={weight} onChange={e=>setWeight(e.target.value)}/>
          </div>
          <div>
            <label>
              Height
            </label>
            <input type='text' placeholder='enter height value' value={height} onChange={e=>setHeight(e.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'>
            <h3>Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
