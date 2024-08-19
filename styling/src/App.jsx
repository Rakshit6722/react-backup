import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Styling from './components/Styling'
import Inline from './components/Inline'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Styling primary={true}/> */}
      {/* <Inline /> */}
      <Form />
    </>
  )
}

export default App
