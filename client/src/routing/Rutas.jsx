import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../components/layout/Header/';
import { NavBar } from '../components/layout/NavBar';
import { Body } from '../components/layout/Body';
import { BotonContacto } from '../components/layout/Body';
import { Footer } from '../components/layout/Footer';
import { Inicio } from '../components/pages/Inicio';
import './index.css'; // Asegúrate de importar el CSS para Rutas

export const Rutas = () => {
  return (
    <BrowserRouter>
        <div className="site-container"> {/* Contenedor del sitio con CSS Grid */}
            <Header/>
            <NavBar/>
            <main className="main-content"> {/* Contenido principal */}
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Inicio" element={<Inicio />} />
                </Routes>
            </main>
            <Body/>
            <BotonContacto/>
            <Footer/>
        </div>
    </BrowserRouter>
  );
};
