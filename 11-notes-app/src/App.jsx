import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (
    <div className='lg:flex h-screen bg-black text-white  '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} 
      className='lg:w-1/2 flex flex-col gap-4 items-start p-10'>

          <h1 className='text-3xl font-bold'>Create Notes</h1>

          <input className='w-full px-5 py-2 border-2 font-medium outline-none rounded' type="text" placeholder='Enter notes heading' value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          />

          <textarea className='w-full outline-none px-5 h-32 py-2 border-2 rounded flex flex-row  font-medium ' type="text" placeholder='Write Details' 
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          />

          <button className='w-full active:bg-gray-500 bg-white text-black px-5 py-2 rounded font-medium' >Add notes</button>
        
      </form>

      <div className='lg:w-1/2 bg-gray-900 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='gap-5 flex flex-wrap item-start justify-start mt-5 h-full overflow-auto'>
          {task.map(function(elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-42 py-9 px-4 pt-9 pb-5 bg-cover rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black">
              <div>
                <h3 className='leading-tight text-xl font-bold' >{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} 
              className='cursor-pointer active:scale-95 w-full py-1 text-xs rounded font-bold bg-red-500 text-white' >Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
