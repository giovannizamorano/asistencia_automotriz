import React from 'react';
import '../pages/css/home.css'

export const Home = () => {
  return (
    <div className='home'>      
    <header className="App-header">
      <div id="espacioSuperior" className="App-titulo">
          <h1 align="center">Servicio de asistencia automotriz</h1>
      </div>
      <nav>
            <ul>
                <li>
                  <a href="/">Menu Principal</a>
                  </li>
                <li>
                  <a href="/analista">analista</a>
                  </li>
                <li>
                  <a href="/presupuesto">presupuesto</a>
                  </li>
                <li>
                  <a href="/liquidacion">liquidacion</a>
                  </li>
                <li>
                  <a href="/call_center">call center</a>
                  </li>
            </ul>
        </nav>
    </header></div>
  )
}
