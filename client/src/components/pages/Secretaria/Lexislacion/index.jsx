import React from 'react'
import './index.css'

import AvaliacionGE from '../../../../assets/docs/avaliacion_ge.pdf'
import AvaliacionGP from '../../../../assets/docs/avaliacion_gp.pdf'
import DecretoGE from '../../../../assets/docs/decreto_grao_elemental.pdf'
import DecretoGP from '../../../../assets/docs/decreto_grao_profesional.pdf'
import Matricula from '../../../../assets/docs/MatriculaHonra.pdf'
import OrdenRoc from '../../../../assets/docs/OrdenRoc.pdf'
import RocConservatorios from '../../../../assets/docs/RocConservatorios.pdf'




export const Lexislacion = () => {
    return (
        <div className="bienvenida">
            <div className="bienvenida_header ">
                <h2 className="bienvenida_header_titulo">Lexislación</h2>
            </div>
            <div class="impresos__container">
                <div class="impresos__texto">
                    <p>Aquí atoparás os diferentes tipos de solicitudes que podes descargar.</p>
                </div>
                <div class="lexislacion__container">
                    <p>​Aquí poderá atopar, acceder e descargar a lexislación vixente pola que nos rexemos nos CMUS de toda a Comunidade de Galicia:</p>
                    <ol>
                        <li class="lexislacion__li"><a class="enlaces__programacion" href={AvaliacionGE}>Avaliación Grao Elemental</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="lexislacion__li"><a class="enlaces__programacion" href={AvaliacionGP}>Avaliación Grao Profesional</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="lexislacion__li"><a class="enlaces__programacion" href={DecretoGE}>Decreto Grao Elemental</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="lexislacion__li"><a class="enlaces__programacion" href={DecretoGP}>Decreto Grao Profesional</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="lexislacion__li"><a class="enlaces__programacion" href={Matricula}>Matricula de Honra e Premio de Fin de Grao</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="lexislacion__li"><a class="enlaces__programacion" href={OrdenRoc}>Orde desenvolvemento ROC Conservatorios</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>
                        <li class="lexislacion__li"><a class="enlaces__programacion" href={RocConservatorios}>Regulamentos Orgánicos dos Conservatorios</a>&nbsp &nbsp<i class="fas fa-file-pdf"></i></li>

                    </ol>
                </div>
            </div>
        </div>

    )
}
