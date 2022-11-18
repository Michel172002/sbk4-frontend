import React from 'react'
import ReactDOM from 'react-dom/client'
import './samples/node-api'
import 'styles/index.css'
import AppRoutes from './routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
