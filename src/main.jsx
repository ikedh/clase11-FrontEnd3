import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contacto from './components/Contacto .jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InicioSesion from './components/InicioSesion.jsx'
import NotFount from './components/NotFount.jsx'
import Productos from './components/Productos.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}>

          <Route path='/contacto' element={<Contacto />} />
          <Route path='/inicio-sesion' element={<InicioSesion />} />
          <Route path='/producto/:id' element={<Productos/>}/>
          <Route path='*' element={<NotFount />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
