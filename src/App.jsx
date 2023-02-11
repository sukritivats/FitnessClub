import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Fit from './component/fit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Fit></Fit>
      </div>
  )
}

export default App
