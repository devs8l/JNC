import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-6 sm:px-15 '>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App