import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/common/Header'
import Footer from './Components/common/Footer'
import Homepage from './Components/Home/Homepage'
import Contact_Us from './Components/Contact/Contact_Us'
import Services from './Components/Services/Services'

function App() {
  return (
    <div className='App'>
        <Header/>
            
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/Services' element={<Services/>}/>
                <Route path='/Contact' element={<Contact_Us/>}/>
            </Routes>

        <Footer/>

    </div>
  )
}

export default App