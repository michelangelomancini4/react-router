import { useState } from 'react'

import './App.css'

// importo la libreria per la gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pagine principali del sito
import HomePage from "./pages/HomePage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import ProductsPage from "./pages/ProductsPage";

// import dell NavBar
import NavBar from './components/NavBar';

// import componente dettaglio
import ProductDetails from './components/ProductDetails';

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chisiamo" element={<ChiSiamoPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
