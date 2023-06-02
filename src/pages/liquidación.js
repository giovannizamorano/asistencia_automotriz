import React from 'react';
import './css/estilo_liquidacion.css';

function App() {
  return (
    <div className="form">
        <nav>
            <ul>
                <li className="App-menu"><a href="/" rel="nofollow">Menu Principal</a></li>
            </ul>
        </nav>
      <h1>Informe de daños</h1>
      <p>En este documento estará la información de todos los daños que recibió el vehículo.</p>
      <div className="container">
        <div className="container-inputs">
          <p>
            Daños recibidos en la parte frontal del vehículo:
            <br />
            <ul>
              <li className='p1'>Pérdida de parachoques</li>
              <li>Ambas luces no funcionan</li>
            </ul>
          </p>
        </div>
        <div className="container-inputs">
          <p>
            Daño recibido en la parte trasera:
            <br />
            <ul>
              <li>No se registran daños</li>
            </ul>
          </p>
        </div>
        <div className="container-inputs">
          <p>
            Daño recibido en el lateral izquierdo:
            <br />
            <ul>
              <li>Pequeña abolladura en la puerta delantera</li>
              <li>Ambos vidrios rotos</li>
            </ul>
          </p>
        </div>
        <div className="container-inputs">
          <p>
            Daño recibido en el lateral derecho:
            <br />
            <ul>
              <li>No se registran daños</li>
            </ul>
          </p>
        </div>
        <p>Le recomendamos que se realice la reparación en su vehículo, ya que los daños recibidos fueron inferiores al 15% y no afectaron tanto.</p>
        <br />
        <p>La reparación se estima en aproximadamente $350.000.</p>
      </div>
    </div>
  );
}

export default App;
