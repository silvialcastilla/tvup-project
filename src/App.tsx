import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PokemonDetail } from './Presentation/Views/Products/Detail/PokemonDetail';
import { PokemonList } from './Presentation/Views/Products/List/PokemonList';

function App() {

  return (
    <Routes>
      <Route path='/' element={<PokemonList />} />
      <Route path='/detail/:id' element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
