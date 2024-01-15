import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import './index.css';
export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-up'>
                <div className="footer-direccion">
                    <p><FontAwesomeIcon icon={faMapMarkedAlt} /> Av. da Estación, 2<br />O Barco de Valdeorras<br />32300 Ourense</p>
                </div>
                <div className="footer-mail">
                    <p><FontAwesomeIcon icon={faAt} /> E-mail: cmus.profesional.obarco@edu.xunta.gal<br /><FontAwesomeIcon icon={faAt} />E-mail: esmu.municipal.obarco@edu.xunta.gal</p>
                </div>
                <div className="footer-telefono">
                    <p><FontAwesomeIcon icon={faPhone} /> Teléfono: (+34) 988320533</p>
                </div>
            </div>
            <div className='footer-down'>
                <a href="../aviso-legal.html">AVISO LEGAL |</a>
                <a href="../privacidade.html">PRIVACIDADE |</a>
                <a href="../cookies.html">COOKIES</a>
                <p>Copyright &copy 2021 <b>Conservatorio e Escola de Música de O Barco de Valdeorras</b>.</p>
            </div>
        </div>
    )
}
