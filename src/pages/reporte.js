import React from 'react';
import '../pages/css/reporte.css';

function AccidentReport() {
  return (
    <div>
      <header className="clearfix">
        <div id="logo">
          <img src="imagenes/logo.png" alt="Logo" />
        </div>
        <div id="company">
          <h2 className="name">Siniestro automotriz</h2>
          <div>Av. Antonio Varas 810, Chile</div>
          <div>(569)98765432</div>
          <div>
            <a href="mailto:company@example.com">Siniestro@automotriz.com</a>
          </div>
        </div>
      </header>
      <main>
        <div id="details" className="clearfix">
          <div id="client">
            <div className="to">Reporte para:</div>
            <h2 className="name">Julioprofe</h2>
            <div className="address">Av. Providencia 1414</div>
            <div className="email">
              <a href="mailto:john@example.com">julioprofe@gmail.com</a>
            </div>
          </div>
          <div id="invoice">
            <h1>Reporte 1-6</h1>
            <div className="date">Fecha de reporte: 09/04/2023</div>
            <div className="date">Fecha de vencimiento: 09/04/2023</div>
          </div>
        </div>
        <table border="0" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th className="no">#</th>
              <th className="desc">Descripción</th>
              <th className="unit">Precio unidad</th>
              <th className="qty">Cantidad</th>
              <th className="total">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="no">01</td>
              <td className="desc">
                <h3>Cantidad de Asistencias</h3>
                Se hace efecto el servicio de grúa y auto de reemplazo
              </td>
              <td className="unit">40.000</td>
              <td className="qty">2</td>
              <td className="total">80.000</td>
            </tr>
            <tr>
              <td className="no">02</td>
              <td className="desc">
                <h3>Tipo de Vehículo</h3>
                SILVERADO 5.3L LT TB AT 4WD P
              </td>
              <td className="unit">0</td>
              <td className="qty">1</td>
              <td className="total">0</td>
            </tr>
            <tr>
              <td className="no">03</td>
              <td className="desc">
                <h3>Resultado de Talleres que Asisten con Grúas</h3>
                Talleres Torque - Road Garaje - Levelup Motors
              </td>
              <td className="unit">$0</td>
              <td className="qty">3</td>
              <td className="total">$0</td>
            </tr>
            <tr>
            <td className="no">04</td>
            <td className="desc"><h3>Talleres que reparan</h3>Talleres Torque - Road garaje - levelup motors</td>
            <td className="unit">$300.000</td>
            <td className="qty">1</td>
            <td className="total">$300.000</td>
          </tr>
          <tr>
            <td className="no">05</td>
            <td className="desc"><h3>Lugares desde los que se solicita asistencia por Región</h3></td>
            <td className="unit">$0</td>
            <td className="qty">1</td>
            <td className="total">$0</td>
          </tr>
          <tr>
            <td className="no">06</td>
            <td className="desc"><h3>Ciudades Principales.</h3>Santiago - viña del mar - valparaiso - antofagasta - arica </td>
            <td className="unit">$0</td>
            <td className="qty">1</td>
            <td className="total">$0</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
            <td colSpan="2">SUBTOTAL</td>
            <td>$380.000</td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td colSpan="2">TAX 19%</td>
            <td>$72.000</td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td colSpan="2">TOTAL</td>
            <td>$452.200</td>
          </tr>
        </tfoot>
      </table>
      <div id="thanks">Gracias por escogernos</div>
      <div id="notices">
        <div>NOTA:</div>
        <div className="notice">Se realizará un cargo del 1,5% sobre los saldos impagos después de 30 días</div>
      </div>
    </main>
  );


export default Invoice;
      
 
    </div>
  );
}

export default AccidentReport;
