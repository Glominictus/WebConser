import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import { Header } from '../components/layout/Header/';
import { NavBar } from '../components/layout/NavBar';


export const Rutas = () => {
  return (
    <BrowserRouter>
        <Header/>
        <NavBar/>
    </BrowserRouter>
  )
}
