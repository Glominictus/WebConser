import React from 'react'
import calendarioseptiembre from '../../../assets/img/calendarioseptiembre.jpg'
import './index.css'
//Pendiente hacer el backend para poder utilizar este componte vamos a utilizar contenido por defecto
export const NoticiasCortas = () => {
    const fechaActual = new Date();

    const fechaFormateada = fechaActual.toLocaleDateString('es', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  
  return (
    <div>
        <div className='noticias-cortas-img'>
            <img src={calendarioseptiembre}alt='calendario'/>
        </div>
        <div className='noticias-cortas-contenido'>
            <div className='noticias-cortas-titulo'><p>O calendario do mes de setembro xa está dispoñible.</p></div>
            <div className='noticias-cortas-enlace'><a href='#'>enlace a noticia</a></div>
            <div className='noticias-corta-fecha'>{fechaFormateada}</div>
        </div>
    </div>
  )
}
