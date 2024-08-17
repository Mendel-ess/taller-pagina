import { useState } from 'react'
import { Home } from './Pages/Home';
import { NubePriv } from './Pages/nubePriv';
import { NubePub } from './Pages/nubePub';
import { NubeComun } from './Pages/nubeCom';
import { NubeHib} from './Pages/nubeHib';
import { Iaas } from './Pages/iass';
import { Paas } from './Pages/paas';
import { Saas } from './Pages/saas';
import { BrowserRouter, Routes, Route} from  'react-router-dom';
import { ModelSer } from './Pages/modelSer';
import { ModelDes } from './Pages/modelDes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/modelo-despliegue' element={<ModelDes/>}/>
          <Route path='/modelo-servicio' element={<ModelSer/>}/>
          <Route path='/nube-privada' element={<NubePriv/>}/>
          <Route path='/nube-comunitaria' element={<NubeComun/>}/>
          <Route path='/nube-hibrida' element={<NubeHib/>}/>
          <Route path='/nube-publica' element={<NubePub/>}/>
          <Route path='/iaas' element={<Iaas/>}/>
          <Route path='/paas' element={<Paas/>}/>
          <Route path='/saas' element={<Saas/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
