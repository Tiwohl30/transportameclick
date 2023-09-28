import './App.css'
import Grid from '../src/pages/Grid'
import Tarifas from '../src/pages/Tarifas'
import Disponibilidad from './pages/Disponibilidadtaxis'
import Pago from './pages/ProblemasPago'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
  

  return (
    <>
      <BrowserRouter>
        
        <Routes>

        <Route exact path="/" element={<Grid />} />
          <Route path='/Soporte' element={<Grid />} />
          <Route path='/ProblemasPago' element={<Pago />} />
          <Route path='/Disponibilidad' element={<Disponibilidad />} />
          <Route path='/Tarifas' element={<Tarifas />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
