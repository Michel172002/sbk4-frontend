import React, { Component } from 'react'
import Inicial from '../pages/inicial'
import Login from '../pages/login'
import Register from '../pages/register'
import Clientes from '../pages/clientes';
import Proprietarios from '../pages/proprietarios';
import Imoveis from '../pages/imoveis';
import Corretores from '../pages/corretores'
import StoreProvaider from '../components/Store/Provider';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoutes from './privateRoutes';
import Config from '../pages/config/config';


function AppRoutes() {

  return (
    <BrowserRouter>
      <StoreProvaider>
        <Routes>
          <Route path='/login' element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Inicial />} />
            <Route path='/register' element={<Register />} />
            <Route path='/clientes' element={<Clientes />} />
            <Route path='/proprietarios' element={<Proprietarios />} />
            <Route path='/imoveis' element={<Imoveis />} />
            <Route path='/corretores' element={<Corretores />} />
            <Route path='/config' element={<Config />} />
          </Route>

        </Routes>
      </StoreProvaider>
    </BrowserRouter>
  )
}


export default AppRoutes
