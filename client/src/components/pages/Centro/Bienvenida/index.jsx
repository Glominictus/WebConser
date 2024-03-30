import React from 'react'
import conservatorio from '../../../../assets/img/conservatorio.jpg'
import './index.css'
export const Bienvenida = () => {
    return (
        <div className="bienvenida">
            <div className="bienvenida_header ">
                <h2 className="bienvenida_header_titulo">BENVIDA</h2>
            </div>
            <div className="bienvenida_container ">
                <img className="bienvenida_container_img " src={conservatorio} title="Conservatorio " alt="conservatorio do barco de valdeorras " />
                <p className="bienvenida_container_texto">Estimado visitante virtual:<br /><br /> Benvid@ ó noso sitio web <br /><br /> O noso centro acolle estudantes de toda a comarca de Valdeorras así como doutras comarcas limítrofes, convertíndose nun centro de referencia na ensinanza musical
                    no oriente ourensán.
                    <br />Na nosa páxina web atopará información sobre a nosa oferta educativa así como a normativa vixente no eido das ensinanzas musicais, poderá consultar o noso calendario de novas e deixaremos enlaces donde descargar os diferentes
                    documentos de interese para o alumnado. <br /> Neste sentido, intentamos combinar todos os recursos e melloras que levamos a cabo no noso Centro dende hai tempo. Acceda á nosa plataforma de xestión, visite a nosa páxina de <a className="bienvenida_container_facebook"
                        href="https://www.facebook.com/Conservatorio-y-Escuela-De-M%C3%BAsica-Barco-Valdeorras-493623220826308" target="_blank">Facebook</a> ou canle de <a className="bienvenida_container_youtube" href="https://www.youtube.com/channel/UC0G5x7RgJjq7yr2bNpdpGjw"
                            target="_blank"> YouTube</a>, estea actualizado e informado do noso calendario de novas e actividades, lea os nosos documentos institucionais.<br /> Intentaremos entre todos manter esta páxina como un espazo vivo para ir actualizando
                    contidos que nos parezan de interese para a comunidade educativa.<br />Agradecendo a súa visita, esperamos que este espazo web sexa do interese de todos.</p>
                <div></div>
                <div className="bienvenida_container_saludo">
                    <p>O equipo directivo do Conservatorio Profesional e Escola de música de O barco de Valdeorras</p>
                </div>
            </div>
        </div>
    )
}
