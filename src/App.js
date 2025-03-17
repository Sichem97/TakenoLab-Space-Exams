import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/common/Header'
import Footer from './Components/common/Footer'
import Homepage from './Components/Home/Homepage'
import ContactUs from './Components/Contact/Contact_Us'
import Services from './Components/Services/Services'
import Exams from './Components/Services/Exams/Exams'
import Quiz from './Components/Services/Quiz/Quiz'
import Assignements from './Components/Services/Assignements/Assignements'
import SubmissionProject from './Components/Services/SubmissionProject/SubmissionProject'


function App() {
  return (
    <div className='App'>
        <Header/>
            
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/Services' element={<Services/>}/>
                <Route path='/Contact' element={<ContactUs/>}/>
                <Route path='/Quiz' element={<Quiz/>}/>
                <Route path='/Assignements' element={<Assignements/>}/>
                <Route path='/Exams' element={<Exams/>}/>
                <Route path='/SubmissionProject' element={<SubmissionProject/>}/>
            </Routes>

        <Footer/>

    </div>
  )
}

export default App