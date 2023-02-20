import React from 'react';
import { Route, Routes } from 'react-router-dom'
import PaginaError from './components/PaginaError/PaginaError'
// import axios from 'axios';
// axios.defaults.baseURL = 'https://pi-production.up.railway.app/';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path='/'
          element = {<PaginaError/>}
        />

        {/* <Route
          exact
          path='/recipes'
          element = {<Recipes/>}
        />

        <Route
          exact
          path='/recipes/:id'
          element = {<RecipeDetails/>}
        />

        <Route
          exact
          path='/recipes/create'
          element = {<RecipeCreate/>}
        /> */}
      </Routes>
    </div>
  )
}

export default App
