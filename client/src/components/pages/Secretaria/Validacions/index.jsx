import React from 'react'
import './index.css'

import Regulamento from '../../../../assets/docs/RegulamentoValidacions.pdf'
import Solicitude from '../../../../assets/docs/SolicitudeValidacions.pdf'
export const Validacions = () => {
    return (
        <div className="bienvenida">
            <div className="bienvenida_header ">
                <h2 className="bienvenida_header_titulo">Validacións</h2>
            </div>
            <div class="validacions">
                <p>Lexislación e impreso de solicitude de validacións</p>
            </div>
            <ul>
                <li class="validacion-li"><a href={Regulamento} target="_blank" class="enlaces__programacion">Regulamento das validacións</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                <li class="validacion-li"><a href={Solicitude} target="_blank" class="enlaces__programacion">Impreso de solicitude de validacións</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
            </ul>
        </div>
        
    )
}
