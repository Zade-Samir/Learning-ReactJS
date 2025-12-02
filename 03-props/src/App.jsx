import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card name = "Shwetal Potle" age = "23" img = "https://images.unsplash.com/photo-1738003946582-aabeabf5e009?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card name = "Aditya Giradkar" age = "21" img = "https://images.unsplash.com/photo-1753847726685-6af24062aa9e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card name = "Ronit Gajbhiye" age = "22" img = "https://plus.unsplash.com/premium_photo-1752865066686-a58cb4d5b966?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
