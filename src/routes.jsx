import React, {Component} from 'react'
import Inicial from './pages/inicial'
import Login from './pages/login'
import Register from './pages/register'
import Clientes from './pages/clientes';
import Proprietarios from './pages/proprietarios';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function AppRoutes(){

  return(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicial/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/clientes' element={<Clientes/>}></Route>
      <Route path='/proprietarios' element={<Proprietarios/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
export default AppRoutes