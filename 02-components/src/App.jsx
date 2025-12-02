import React from 'react'
import Card from './components/Cards'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Samir Zade</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, qui?</p>
      </div>
      {Card()}
    </div>
  )
}

export default App
