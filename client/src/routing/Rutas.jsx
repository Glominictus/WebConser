import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import { Header } from '../components/layout/Header/';
import { NavBar } from '../components/layout/NavBar';
import { Body } from '../components/layout/Body';
import { BotonContacto } from '../components/layout/Body';
import { Footer } from '../components/layout/Footer';


export const Rutas = () => {
  return (
    <BrowserRouter>
        <Header/>
        <NavBar/>
        <Body/>
        <BotonContacto/>
        <Footer/>
    </BrowserRouter>
  )
}
