import './css/call_center.css';

function Call_center() {
  return (
    <div>


      <header className="App-header">
      <div id="espacioSuperior" className="App-titulo">
          <h1 align="center">Call Center</h1>
      </div>
      <nav>
            <ul>
                <li className="App-menu"><a href="/" rel="nofollow">Menu Principal</a></li>
            </ul>
        </nav>
       <br/>
       <h2 align="left" >servicio al cliente</h2>
      </header>

      <body className="App-body">
        <div class="row">
          <div class="col-md-12">
            <form>
            <div class="row">
                      <div class="col-md-2">
                        <label for="full_name_id" class="control-label">Nombre: </label>
                      </div>  
                      <div class="col-md-5">  
                        <input type="text" class="form-control" id="full_name_id" name="full_name"/>    
                      </div>
              </div>
              <br/>
              <div class="row">
                        <div class="col-md-2">
                          <label for="lastname" class="control-label">Apellido paterno: </label>
                        </div>
                        <div class="col-md-5">
                          <input type="text" class="form-control" id="lastname" name="userlastname"/>
                        </div>
                </div>
                <br/>
                <div class="row">
                      <div class="col-md-2">
                        <label for="lastname" class="control-label">Apellido Materno: </label>
                      </div>
                      <div class="col-md-5">
                        <input type="text" class="form-control" id="Mlastname" name="userMlastname"/>
                      </div>
                  </div>

                  <br/>

                  <div class="row">
                    <div class="col-md-2"> 
                      <label for="mail" class="control-label">Correo electronico: </label>
                    </div>
                    <div class="col-md-5">
                      <input type="email" class="form-control" id="mail" name="usermail"/>
                    </div>
                  </div> 

                <br/>

                  <div class="row">
                      <div class="col-md-2">                      
                            <label for="street2_id" class="control-label col-md-6">Número:</label>
                          </div>
                            <div class="col-md-5">     
                            <input type="number" class="form-control col-md-6" id="number_id" name="number" placeholder="+569"/>
                      </div>    
                  </div>
                  <br/>
                  <div class="row">
                    <div class="col-md-2">                      
                        <label for="Rut" class="control-label col-md-6">Rut:</label>
                        </div>
                        <div class="col-md-5">     
                        <input type="Rut" class="form-control col-md-6" id="rut_id" name="rut" placeholder=""/>
                    </div>    
                </div>
              <br/>
                  <div class="row"> 
                    <div class="col-md-2">
                        <label for="state_id" class="control-label col-md-6">Región:</label>
                        </div>     
                        <div class="col-md-5">
                        <select class="form-control" id="region_id">
                            <option value="VAC"></option>
                            <option value="MET">METROPOLITANA</option>
                            <option value="VALPARAISO">VALPARAÍSO</option>
                        </select>                    
                    </div>
                    </div> 
                  <br/>
                  <div class="row">
                      <div class="col-md-2">  
                          <label for="street1_id" class="control-label col-md-6">Comuna:</label>
                      </div> 
                      <div class="col-md-5">
                          <input type="text" class="form-control col-md-6" id="comun_id" name="street"/>
                      </div>                                
                  </div> 
                  <br/>

                  <div class="row"> 
                    <div class="col-md-2">  
                        <label for="issues" class="control-label col-md-6">Problema:</label>
                    </div> 
                    <div class="col-md-5">
                        <input type="text" id="comun_id" name="street" placeholder="ingrese su problema"/>
                    </div>                                
                </div> 
              <br/>
                      <div class="row"/>
                        <div class="col-md-2">
                          <label for="date" >Fecha: </label>                       
                        </div>
                        <div class="col-md-5">
                        <input type="date" id="date" name="expiration"/>
                      </div>

                      <br/>
                      <div class="form-group"/>
                        <div class="center">
                            <button type="submit" class="row col-md-4 btn btn-primary btn-lg">Enviar</button>
                        </div>

            </form>

          </div>
        </div>


        <h6 align="center">Numero de contacto: +569000000</h6>
        <h3 align="center">Horario de atencion telefonica</h3>
        <table border="2">

          <tr>

            <th>Dia</th>

            <th>Entrada</th>

            <th>Salida</th>

          </tr>

          <tr>

            <td>Lunes</td>

            <td>08:00</td>

            <td>16:00</td>

          </tr>

          <tr>

            <td>Martes</td>

            <td>08:00</td>

            <td>16:00</td>

          </tr>

          <tr>

            <td>Miercoles</td>

            <td>08:00</td>

            <td>16:00</td>

          </tr>

          <tr>

            <td>jueves</td>

            <td>08:00</td>

            <td>16:00</td>

          </tr>

          <tr>

            <td>viernes</td>

            <td>08:30</td>

            <td>15:00</td>

          </tr>
        </table>

        <footer id="piePagina" className="App-footer">
          <p></p>
        </footer>

      </body>
    </div>
  );
}

export default Call_center;
