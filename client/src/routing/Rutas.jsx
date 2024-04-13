import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../components/layout/Header/';
import { NavBar } from '../components/layout/NavBar';
import { Footer } from '../components/layout/Footer';
import { Inicio } from '../components/pages/Inicio';
import './index.css'; // Asegúrate de importar el CSS para Rutas
import { Bienvenida } from '../components/pages/Centro/Bienvenida';
import { Historia} from '../components/pages/Centro/Historia'
import {OndeEstamos} from '../components/pages/Centro/OndeEstamos'
import {Organigrama} from '../components/pages/Centro/Organigrama'
import {Oferta} from '../components/pages/Conservatorio/Oferta'
import {Departamentos} from '../components/pages/Conservatorio/Departamentos'
import {Titulo} from '../components/pages/Secretaria/Titulo'
import {Impresos} from '../components/pages/Secretaria/Impresos'
import { Lexislacion } from '../components/pages/Secretaria/Lexislacion';
import {Traslados} from '../components/pages/Secretaria/Traslados'
import {Validacions} from '../components/pages/Secretaria/Validacions'
import {About} from '../components/pages/Multimedia/About'

export const Rutas = () => {
  return (
    <BrowserRouter>
        <div className="site-container"> 
            <Header/>
            <NavBar/>
            <main className="main-content"> 
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Inicio" element={<Inicio />} />
                    <Route path="/Centro/Benvida" element={<Bienvenida />} />
                    <Route path="/Centro/Historia" element={<Historia />} />
                    <Route path="/Centro/onde-estamos" element={<OndeEstamos />} />
                    <Route path="/Centro/Organigrama" element={<Organigrama />} />
                    <Route path="/conservatorio/oferta-academica" element={<Oferta />} />
                    <Route path="/conservatorio/departamentos" element={<Departamentos />} />
                    <Route path="/secretaria/Titulo" element={<Titulo />} />
                    <Route path="/secretaria/Impresos" element={<Impresos />} />
                    <Route path="/secretaria/Lexislacion" element={<Lexislacion />} />
                    <Route path="/secretaria/traslado-expediente" element={<Traslados />} />
                    <Route path="/secretaria/validacions" element={<Validacions />} />

                    <Route path="/multimedia/about" element={<About />} />


                </Routes>
            </main>
            <Footer/>
        </div>
    </BrowserRouter>
  );
};
