import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  let changeValue = () => {
    setNum(num+10000000)
  }

  return (
    <div>
      <h1>Value is {num}</h1>
      <button onClick={changeValue} >Click</button>
    </div>
  )
}

export default App
