import React from 'react'

const App = () => {

  const getData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    console.log(response)
  }
  
  return (
    <div>
      Hello
    </div>
  )
}

export default App
