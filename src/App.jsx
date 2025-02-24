import { useState } from 'react'

import './App.css'

// importo la libreria per la gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pagine principali del sito
import HomePage from "./pages/HomePage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import ProductsPage from "./pages/ProductsPage";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chisiamo" element={<ChiSiamoPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
