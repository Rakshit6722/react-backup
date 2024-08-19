import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetchingOne from './components/DataFetchingOne'
import DataFetchingTwo from './components/DataFetchingTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <DataFetchingOne /> */}
     <DataFetchingTwo />
    </>
  )
}

export default App
