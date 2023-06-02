import React, { useState } from 'react';
import './analistaSiniestro.css';

function AnalistaSiniestro() {
  const [showTallerModal, setShowTallerModal] = useState(false);
  const [showAsistenciaModal, setShowAsistenciaModal] = useState(false);

  const openTallerModal = (event) => {
    event.stopPropagation();
    setShowTallerModal(true);
  };

  const closeTallerModal = () => {
    setShowTallerModal(false);
  };

  const openAsistenciaModal = () => {
    setShowAsistenciaModal(true);
  };

  const closeAsistenciaModal = () => {
    setShowAsistenciaModal(false);
  };

  return (
    <div className="container">
      <button className="button" onClick={openTallerModal}>Gestionar Taller</button>
      <button className="button" onClick={openAsistenciaModal}>Consultar Asistencia de Grúa</button>

      <div className={`modal ${showTallerModal ? 'active' : ''}`}>
        <div className="modal-overlay" onClick={closeTallerModal} />
        <div className="modal-content">
          <span className="modal-close" onClick={closeTallerModal}>X</span>
          <h2>Gestionar Taller</h2>
          <label htmlFor="comuna">Comuna:</label>
          <select id="comuna">
            {<><option value="value1">
              </option><option value="value2">Maipú</option>
              <option value="value3">Quinta Normal</option>
              <option value="value4">Providencia</option></>}
          </select>

          <label htmlFor="taller">Taller:</label>
          <select id="taller">
            {<><option value="value1"></option>
            <option value="value2">Taller #1</option>
            <option value="value3">Taller #2</option>
            <option value="value4">Taller #3</option></>}
          </select>

          <div className="placeholder-text">Administrador del taller:</div>
          <div className="placeholder-text">Dirección del taller:</div>
          <div className="placeholder-text">Número telefónico:</div>
        </div>
      </div>

      
      <div className={`modal ${showAsistenciaModal ? 'active' : ''}`}>
        <div className="modal-overlay" onClick={closeAsistenciaModal} />
        <div className="modal-content">
        <span className="modal-close" onClick={closeAsistenciaModal}>X</span>
        <h2>Ventana Modal - Consultar Asistencia de Grúa</h2>
        {<><p> Estado: <strong>DISPONIBLE</strong></p>
        <p><strong>Nombre del chofer: </strong> Julio Hernandez</p>
        <p><strong>RUT: </strong> 62.152.391-4</p>
        <p><strong>Patente de la grúa: </strong> KF CX 22</p>
        <p><strong>Dirección pto. de retiro: </strong> Avenida Casablanca 44</p>
        <p><strong>Dirección pto. de destino: </strong> O Higgins 23</p>
        <p><strong>Marca y modelo del auto asistido: </strong> Ford Fiesta</p></>}
        </div>
      </div>
    </div>
  );
}

export default AnalistaSiniestro;
