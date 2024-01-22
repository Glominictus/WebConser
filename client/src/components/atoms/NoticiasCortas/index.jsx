import React from "react";
import calendarioseptiembre from "../../../assets/img/calendarioseptiembre.jpg";
import "./index.css";
//Pendiente hacer el backend para poder utilizar este componte vamos a utilizar contenido por defecto
export const NoticiasCortas = () => {
  const fechaActual = new Date();

  const fechaFormateada = fechaActual.toLocaleDateString("es", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="noticias-cortas-container">
      <div className="noticias-cortas-img">
        <img src={calendarioseptiembre} alt="calendario" />
      </div>
      <div className="noticias-cortas-contenido espaciado">
        <div>
          <p>O calendario do mes de setembro xa está dispoñible.</p>
          <a href="#">enlace a noticia</a>
          <p>{fechaFormateada}</p>
        </div>
      </div>
    </div>
  );
};
