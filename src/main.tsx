import React from 'react'
import ReactDOM from 'react-dom/client'
import './samples/node-api'
import 'styles/index.css'
import AppRoutes from './routes/routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <AppRoutes/>
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
