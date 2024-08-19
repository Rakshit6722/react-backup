import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </>
  )
}

export default App
