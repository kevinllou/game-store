import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import RootComponent from './components/Root/RootComponent';
import Home from './pages/Home/Home';
import DetailGame from './pages/DetailsGame/DetailGame';
import Games from './pages/Games/Games';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootComponent />}>
          <Route index element={<Home />} />
          <Route path='games' element={<Games />} />
          <Route path='games/:id' element={<DetailGame />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
