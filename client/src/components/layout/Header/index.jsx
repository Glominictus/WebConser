import React from 'react'
import './index.css'
import logo from '../../../assets/img/logo-minimizado.png'
export const Header = () => {
  return (
    <div className='header'>
        <div className='header-logo-container'>
            <img src={logo} alt="logo"/>
            <span className='header-logo-title'>CMUS</span>
        </div>
        <div className='header-title'>
            <h1>Conservatorio Profesional<br/>Escola de Música <br/>do Barco de Valdeorras</h1>
        </div>
    </div>
  )
}