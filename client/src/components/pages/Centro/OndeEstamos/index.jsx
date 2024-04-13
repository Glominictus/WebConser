import React from "react";
import './index.css'

export const OndeEstamos = () => {

    return (

        <div className="onde">
            <div className="onde_header">
                <h2 className="onde_header_titulo"> ONDE ESTAMOS </h2>
            </div>

            <div className="onde__texto">

                <p><i>Dirección: Av. da Estación, 2,<br />O Barco de Valdeorras, 32300<br />Ourense</i><br />Teléfono: 988320533</p>

            </div>

            <div className="onde__container ">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.584595388626!2d-6.987848685101405!3d42.4152899791832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3083f5342ea827%3A0x12d47ff70f5f85a0!2sConservatorio%20de%20M%C3%BAsica%20Profesional%20Do%20Barco%20de%20Valdeorras!5e0!3m2!1ses!2ses!4v1628623792683!5m2!1ses!2ses"
                    width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy">
                </iframe>

            </div>

        </div>

    )
}