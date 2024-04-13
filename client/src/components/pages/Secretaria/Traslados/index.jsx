import React from 'react'
import './index.css'

import Traslado from '../../../../assets/docs/SolicitudeTraslado.pdf'

export const Traslados = () => {
    return (
        <div className="bienvenida">
            <div className="bienvenida_header ">
                <h2 className="bienvenida_header_titulo">Traslado de Expediente</h2>
            </div>
            <div class="titoria__impreso">
                <p>Información importante relativa o traslado de expediente:<br/></p>
                <ul class="expediente">
                    <li>Dependendo das prazas vacantes na especialidade solicitada, aceptarase ou non o traslado</li>
                    <li><b>Imprescindible</b> un motivo xustificado e acreditado(cambio de domicilio, traslado por traballo ou estudos, etc.)</li>
                </ul>
                <br/>
                <p><b>REQUISITOS</b></p>
                <div class="requisitos">
                    <ul class="expediente">
                        <li><a class="enlaces__programacion" href={Traslado} target="_blank">Impreso solicitude de traslado.</a></li>
                        <li>Fotocopia do DNI do alumno.</li>
                        <li>Certificado académico do Conservatorio.</li>
                        <li>Xustificante de realizar a matrícula no outro Centro desde o que se desexa formalizar o traslado de Matrícula Viva.</li>
                        <li>Proba documentada da causa do traslado</li>

                    </ul>
                </div>
                <br/>

                
                {/*  //Hay que corregir esta línea
                <p>Esto podese entregar na secretaría do Conservatorio ou enviar unha mensaxe o correo do Centro. Se ten algunha duvida, pode enviar unha mensaxe a traves do <a style="color: black" href="../Secretaria/contacto.html ">formulario de contacto</a>.</p>*/}


            </div>
        </div>
        

    )
}
