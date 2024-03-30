import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../components/layout/Header/';
import { NavBar } from '../components/layout/NavBar';
import { Footer } from '../components/layout/Footer';
import { Inicio } from '../components/pages/Inicio';
import './index.css'; // Asegúrate de importar el CSS para Rutas
import { Bienvenida } from '../components/pages/Centro/Bienvenida';
export const Rutas = () => {
  return (
    <BrowserRouter>
        <div className="site-container"> 
            <Header/>
            <NavBar/>
            <main className="main-content"> 
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Inicio" element={<Inicio />} />ç
                    <Route path="/Centro/Benvida" element={<Bienvenida />} />
                </Routes>
            </main>
            <Footer/>
        </div>
    </BrowserRouter>
  );
};
