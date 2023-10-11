import React, {Component} from 'react'
import Inicial from './pages/inicial'
import Login from './pages/login'
import Register from './pages/register'
import Clientes from './pages/clientes';
import Proprietarios from './pages/proprietarios';
import Imoveis from './pages/imoveis';
import Corretores from './pages/corretores'
import StoreProvaider from './components/Store/Provider';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function AppRoutes(){

  return(
 <BrowserRouter>
 <StoreProvaider>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path='/inicio' element={<Inicial/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/clientes' element={<Clientes/>} />
      <Route path='/proprietarios' element={<Proprietarios/>} />
      <Route path='/imoveis' element={<Imoveis/>} />
      <Route path='/corretores' element={<Corretores/>} />
    </Routes>
    </StoreProvaider>
  </BrowserRouter>
  )
}
export default AppRoutes