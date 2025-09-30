import React from 'react'

export default function Tarjeta({ nombre, edad, profesion, image }) {
  return (
    <div className="tarjeta">
      {image ? (
        <img src={image} alt={nombre} className="tarjeta-img" />
      ) : (
        <div className="tarjeta-img placeholder">image</div>
      )}
      <div className="tarjeta-body">
        <h3>{nombre}</h3>
        <p>Edad: {edad}</p>
        <p>Profesión: {profesion}</p>
      </div>
    </div>
  )
}
