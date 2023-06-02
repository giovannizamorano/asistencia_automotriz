import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Home} from '../pages/Home'
import AnalistaSiniestro from '../pages/analistaSiniestro';
import TablaPresupuesto from '../pages/gestionar_presupuesto';
import App from '../pages/liquidación';
import Call_center from '../pages/call_center';
import AccidentReport from '../pages/reporte';
import {Error} from '../pages/Error'

export const MyRoutersComponent = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/analista" element={<AnalistaSiniestro/>}/>
                <Route path="/presupuesto" element={<TablaPresupuesto/>}/>
                <Route path="/liquidacion" element={<App/>}/>
                <Route path="/call_center" element={<Call_center/>}/>
                <Route path="/reporte" element={<AccidentReport/>}/>                

                <Route path="/*" element={<Error/>}/>                 
            </Routes>
        </BrowserRouter>
    )
}