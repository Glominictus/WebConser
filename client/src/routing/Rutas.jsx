import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import { Header } from '../components/layout/Header/';


export const Rutas = () => {
  return (
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
  )
}
