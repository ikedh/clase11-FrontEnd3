import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
        <NavBar/>
        <h2>Soy la página de inicio</h2>
        <Outlet/>
        
        <Footer/>
      
    </>
  )
}

export default App
