import React from 'react'
import './index.css'

import AutorizacionMaiores from '../../../../assets/docs/AutoMaioresConser.pdf'
import AutorizacionMenores from '../../../../assets/docs/AutoMenoresConser.pdf'
import ConsentimientoGrabacions from '../../../../assets/docs/ConsentimientoGrabacions.pdf'
import ReclamacionCualificacions from '../../../../assets/docs/ReclamacionCualificacions.pdf'
import InformeIndividualizado from '../../../../assets/docs/InformeIndividualizado.pdf'
import SolicitudeCertificacions from '../../../../assets/docs/SolicitudeCertificacions.pdf'
import SolicitudeCualificacions from '../../../../assets/docs/SolicitudeCualificacions.pdf'
import XustificanteFalta from '../../../../assets/docs/XustificanteFalta.pdf'
import CambioHorario from '../../../../assets/docs/CambioHorario.pdf'
import CambioProfesor from '../../../../assets/docs/CambioProfesor.pdf'
import ImpresoMatricula from '../../../../assets/docs/ImpresoMatricula.pdf'

export const Impresos = () => {
    return (
        <div className="bienvenida">
            <div className="bienvenida_header ">
                <h2 className="bienvenida_header_titulo">IMPRESOS</h2>
            </div>
            <div class="impresos__container">
                <div class="impresos__texto">
                    <p>Aquí atoparás os diferentes tipos de solicitudes que podes descargar.</p>
                </div>
                <div class="impresos__lista">
                    <ul>
                        <li class="impresos__li"><a href={AutorizacionMaiores} target="_blank" class="enlaces__programacion">Autorización de imaxes menor de idade</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={AutorizacionMenores} target="_blank" class="enlaces__programacion">Autorización de imaxes maior de idade</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={ConsentimientoGrabacions} target="_blank" class="enlaces__programacion">Impreso de consentimento de grabación</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={ReclamacionCualificacions} target="_blank" class="enlaces__programacion">Impreso de reclamación de cualificacións</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={InformeIndividualizado} target="_blank" class="enlaces__programacion">Impreso de informe individualizado alumno/a</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={SolicitudeCertificacions} target="_blank" class="enlaces__programacion">Impreso de solicitude de certificacións oficiais</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={SolicitudeCualificacions} target="_blank" class="enlaces__programacion">Impreso de solicitude de cualificacións(Conservatorio)</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={XustificanteFalta} target="_blank" class="enlaces__programacion">Impreso de xustificante de falta de asistencia</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={CambioHorario} target="_blank" class="enlaces__programacion">Solicitude de cambio de Horario</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={CambioProfesor} target="_blank" class="enlaces__programacion">Solicitude de cambio de Profesor/a</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="impresos__li"><a href={ImpresoMatricula} target="_blank" class="enlaces__programacion">Impreso de Matricula</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>

                    </ul>
                </div>
            </div>
        </div>

    )
}
