import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/greet'
import LoginLogout from './components/LoginLogout'
import PersonList from './components/PersonList'
import Table from './components/Table'
import RefsDemo from './components/RefsDemo'
import Practice from './components/Practice'
import DirectlyCallingRefs from './components/DirectlyCallingRefs'
import Portal from './components/Portal'
import Hero from './components/Hero'
import ErrorBoundars from './components/ErrorBoundars'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    {/* <Greet name='rakshit' /> */}
    {/* <LoginLogout /> */}
    {/* <PersonList /> */}
    {/* <Table/> */}
    {/* <RefsDemo /> */}
    {/* <Practice /> */}
    {/* <DirectlyCallingRefs /> */}
    {/* <Portal /> */}
    <ErrorBoundars>
      <Hero heroname="Rakshit"/>
      <Hero heroname="Joker"/>
    </ErrorBoundars>
    </>
  )
}

export default App
