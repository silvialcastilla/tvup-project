import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PokemonList } from './Presentation/Views/Pokemons/List/PokemonList';
import { PokemonDetail } from './Presentation/Views/Pokemons/Detail/PokemonDetail';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PokemonList />} />
      <Route path='/detail/:id' element={<PokemonDetail />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
