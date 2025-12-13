import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([])   
  const [index, setIndex] = useState(1) 

  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
  }

  useEffect(function() {
    getData()
  }, [index]) //changes happen with button using index here

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function(elem, idx) {
      return <div key={idx} >
            <Card elem = {elem} />
        </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto p-6 text-white'>
      {/* <button
      onClick={getData}
       className='bg-yellow-600 mb-3 active:scale-95 px-5 py-1 rounded text-white '>Click</button> */}
       <div className='flex h-[82%] flex-wrap gap-5 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center p-4 items-center gap-6'>

        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded text-black px-4 py-2  font-semibold'
        onClick={() =>{
          if (index > 1) {
            setIndex(index - 1)
            setUserData([]) 
          }
        }}
        >Prev</button>

        <h1>Page {index}</h1>

        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded text-black px-4 py-2  font-semibold'
        onClick={() =>{
          setIndex(index + 1)
            setUserData([])
        }}
        >Next</button>
      </div>
    </div>
    
  )
}

export default App
