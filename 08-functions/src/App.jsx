import React from 'react'

const App = () => {

  const buttonClick = () => {
    console.log("button is click now");
  }

  const userTyping = () => {
    console.log("User is typing");
  }

  return (
    <div>
      {/* use onClick for button */}
      <button onClick={buttonClick} >Click here</button>

      {/* use onChange for text box */}
      {/* <input onChange={userTyping} type="text" placeholder='Enter name' /> */}

      <input onChange={function (elem) {
        console.log(elem.target.value);
        
      }} type="text" placeholder='enter name' />
    </div>
  )
}

export default App
