import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import SobreMi from './components/SobreMi/SobreMi';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import Curriculum from './components/Curriculum/Curriculum';
import Habilidades from './components/Habilidades/Habilidades';
import Educacion from './components/Educacion/Educacion';
import PaginaError from './components/PaginaError/PaginaError'
import axios from 'axios';
axios.defaults.baseURL = 'https://portfolio-back-fabian.up.railway.app/';
// axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path='/'
          element = {<Home/>}
        />

        <Route
          exact
          path='/sobremi'
          element = {<SobreMi/>}
        />

        <Route
          exact
          path='/proyectos'
          element = {<Proyectos/>}
        />

        <Route
          exact
          path='/contacto'
          element = {<Contacto/>}
        />

        <Route
          exact
          path='/curriculum'
          element = {<Curriculum/>}
        />

        <Route
          exact
          path='/habilidades'
          element = {<Habilidades/>}
        />

        <Route
          exact
          path='/experiencia'
          element = {<PaginaError/>}
        />
      </Routes>
    </div>
  )
}

export default App
