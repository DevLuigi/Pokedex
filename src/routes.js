import { BrowserRouter, Routes, Route } from 'react-router-dom';


import IntroPokedex from './pages/intro';
import Pokedex from './pages/pokedex';





export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<IntroPokedex />} />
          <Route path='/pokedex' element={<Pokedex />}/>
      </Routes>
    </BrowserRouter>
  )
}