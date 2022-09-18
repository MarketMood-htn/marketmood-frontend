import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import './App.css';
import Moodboard from "./pages/Moodboard";
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="moodboard" element={<Moodboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
