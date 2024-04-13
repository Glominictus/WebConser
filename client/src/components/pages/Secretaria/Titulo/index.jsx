import React from 'react'
import titulo from '../../../../assets/docs/doc_impreso_titulo.pdf'
import './index.css'
export const Titulo = () => {
    return (
        <div className="bienvenida">
            <div className="bienvenida_header ">
                <h2 className="bienvenida_header_titulo">SOLICITUDE DE TÍTULO</h2>
            </div>
            <div className="texto-titulo">
                <p>Para os alumnos de 6º de Grao Profesional:<br/><br/> Todo o alumnado que remate os seus estudos, na convocatoria de xuño ou na extraordinaria de setembro, deberá realizar os trámites necesarios para solicitar o título do grao profesional
                    nos prazos establecidos polo Centro.<br/><br/> É imprescindible para poder realizar probas de acceso aos conservatorios superiores ter realizado este trámite.<br/><br/> DOCUMENTACIÓN:</p><br/>
                <ul class="titulo-list">
                    <li><a className="enlaces__programacion" href={titulo} target="_blank">Impreso solicitude de título.</a></li>
                    <li><b>Fotocopia actualizada do DNI ou do Libro de Familia (Folla do/a alumno/a).</b></li>
                    <li><b>Modelo de Taxas € da Comunidade Autónoma de Galicia.</b></li>
                </ul>
            </div>
        </div>

    )
}
