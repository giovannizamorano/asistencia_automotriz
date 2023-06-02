
import './css/estilos_presupuesto.css';
import React, { useState } from 'react';

function TablaPresupuesto() {
  const [presupuesto, setPresupuesto] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [unidades, setUnidades] = useState('');
  const [precio, setPrecio] = useState('');

  const agregarComp = () => {
    const nuevoComp = {
      descripcion: descripcion,
      unidades: unidades,
      precio: precio
    };

    setPresupuesto([...presupuesto, nuevoComp]);
    setDescripcion('');
    setUnidades('');
    setPrecio('');
  };

  return (
    <div> 
      <nav>
            <ul>
                <li className="App-menu"><a href="/" rel="nofollow">Menu Principal</a></li>
            </ul>
        </nav>
      <h1 className="presupuesto_titulo">Gestión de presupuesto</h1>
      <table className="presupuesto_tabla">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Unidades</th>
            <th>Precio ($)</th>
          </tr>
        </thead>
        <tbody>
          {presupuesto.map((comp, index) => (
            <tr key={index}>
              <td>{comp.descripcion}</td>
              <td>{comp.unidades}</td>
              <td>{comp.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="presupuesto_titulo">Ingrese componente: </h1>
      <div className="presupuesto">
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Unidades"
          value={unidades}
          onChange={(e) => setUnidades(e.target.value)}
        />
        <input
          type="int"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button className="presupuesto_boton" onClick={agregarComp}>
          Añadir Componente
        </button>
      </div>
    </div>
  );
}

export default TablaPresupuesto;
