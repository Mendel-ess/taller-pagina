import { useState } from 'react'
import { Home } from './Pages/Home';
import { NubePriv } from './Pages/nubePriv';
import { NubePub } from './Pages/nubePub';
import { NubeComun } from './Pages/nubeCom';
import { NubeHib} from './Pages/nubeHib';
import { Iaas } from './Pages/iass';
import { Paas } from './Pages/paas';
import { Saas } from './Pages/saas';
import { BrowserRouter, Routes, Route, Navigate} from  'react-router-dom';
import { ModelSer } from './Pages/modelSer';
import { ModelDes } from './Pages/modelDes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/taller-pagina' element={<Home/>}/>
          <Route path='/taller-pagina/modelo-despliegue' element={<ModelDes/>}/>
          <Route path='/taller-pagina/modelo-servicio' element={<ModelSer/>}/>
          <Route path='/taller-pagina/nube-privada' element={<NubePriv/>}/>
          <Route path='/taller-pagina/nube-comunitaria' element={<NubeComun/>}/>
          <Route path='/taller-pagina/nube-hibrida' element={<NubeHib/>}/>
          <Route path='/taller-pagina/nube-publica' element={<NubePub/>}/>
          <Route path='/taller-pagina/iaas' element={<Iaas/>}/>
          <Route path='/taller-pagina/paas' element={<Paas/>}/>
          <Route path='/taller-pagina/saas' element={<Saas/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
