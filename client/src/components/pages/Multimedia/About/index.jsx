import React from 'react'
import './index.css'

import Camara from '../../../../assets/img/camara.jpg'


export const About = () => {
    return (
        <div className="bienvenida">
            <div className="bienvenida_header ">
                <h2 className="bienvenida_header_titulo">Validacións</h2>
            </div>
            <div class="about__container>">
                <img class="about__img" src={Camara}/>
                <div id="about__texto__container">
                    <p class="about__texto">Estamos actualizando constantemente a web, subindo novos contidos e mellorando o seu aspecto xeral para facela máis accesible e interactiva. Na sección <b>“MULTIMEDIA”</b>, se irán subindo fotografías e videos de concertos e audicións
                        públicas.Somos conscientes de que poderá haber alumnos ou pais de alumnos os que non lles guste facer pública a sua imaxe nestes acontecementos; por iso pregamos que visitedes a páxina e nos comuniquedes si hay algunha fotografía
                        ou video que debamos retirar.
                        <br/><br/> Si pola contra teñen algunha imaxe obtida en concertos públicos e queren incluíla en algunha das galerías da web fáganolo saber ao correo:"".<br/><br/> A nosa intención é que a través da web se manteñan informados de tódolos
                        acontecementos, xestións, e novidades que se produzan ao redor do Conservatorio, e de ter un espazo para dar a coñecer o traballo que realizan tanto o profesorado como o alumnado en xeral.<br/><br/> </p>
                    <p class="about__centrado">Moitas grazas.</p>
                </div>
            </div>
        </div>


    )
}
