import React from 'react'
import './App.css'
import Tarjeta from './components/Tarjeta'

import cat from '../images/cat.jpg'
import catpsico from '../images/catpsico.jpg'
import smokecat from '../images/smokecat.jpg'

const personasArray = [
  { id: 1, nombre: 'Cat Loquito', edad: 2, profesion: 'Locura', image: cat },
  { id: 2, nombre: 'Cat psicodelico', edad: 1, profesion: 'Psicodelia', image: catpsico },
  { id: 3, nombre: 'Cat Fumador', edad: 4, profesion: 'Fumador', image: smokecat },
]

function App() {
  return (
    <div className="app-root">
      <h1>3 gatos hermanos</h1>

      <section className="section">
        <h2>Catsoups</h2>
        <div className="tarjetas-row">
          {personasArray.map(p => (
            <Tarjeta key={p.id} nombre={p.nombre} edad={p.edad} profesion={p.profesion} image={p.image} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
