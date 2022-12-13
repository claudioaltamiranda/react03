import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import Error404 from './components/Error404';
import PromocionApp from './components/PromocionApp';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <div className="App container-fluid d-flex flex-column gap-2 my-3">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer />} />
          <Route path={'/categoria/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'*'} element={<Error404 />} />
        </Routes>
        {/* aca van las promociones o contenido fijo y el footer */}
        <PromocionApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
