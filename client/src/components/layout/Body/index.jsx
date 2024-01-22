import React from 'react'
import './index.css'
import fondomain from '../../../assets/img/fondo-main.jpeg'


export const Body = () => {
return (
    <div className='body-main'>
        <div className='body-main-container'>
            <img className="body-fondo-main" src={ fondomain } alt="body-main-image" />
        </div>
    </div>
    )
}
export const BotonContacto = () => {
    const handleClick = () => {
        alert('¡Haz clic en el botón!');
    };
    return (
        <div className='body-boton'>
            <button className='body-boton-contacto' onClick={handleClick}>
                Haz clic en mí
            </button>
        </div>
    )
}
export default BotonContacto;
