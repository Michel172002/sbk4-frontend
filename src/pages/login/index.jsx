import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import sbk4Fetch from '../../axios/config.js'
import useStorage from '../../utils/useStorege.js'
import jwtDecode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo.png'

function Login() {
  const [values, setValues] = useState({ user: '', password: '' });
  const navigate = useNavigate();
  const [token, setToken, removeToken] = useStorage('token');
  const [user, setUser, removeUser] = useStorage('user');

  const onChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const loaderToast = toast.loading("Fazendo o login...");

    try {
      const res = await sbk4Fetch.post('/user/login', {
        nome: values.user,
        senha: values.password,
      });

      const token = res.data.token;
      setToken(token);

      const decoded = await jwtDecode(token);
      setUser(decoded.sub);

      toast.dismiss(loaderToast);

      navigate('/');
    } catch (error) {
      console.error("Login failed", error);

      toast.dismiss(loaderToast);

      toast.error('Usuário e/ou senha incorretos.');
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='vh-100'>
        <MDBCol sm="7" className='d-flex align-items-center justify-content-center' style={{ backgroundColor: '#0F1A2C' }}>
          <img src={logo} alt="Logo" className="img-fluid" />
        </MDBCol>
        <MDBCol sm="5" className='d-flex align-items-center justify-content-center'>
          <div className='d-flex flex-column justify-content-center w-100 pt-4 m-5'>

            <h3 className="fw-bold mb-3 text-center">Log in</h3>

            <form onSubmit={handleLogin}>
              <MDBInput wrapperClass='mb-4 w-100' label='Nome' id='formControlLg' type='text' size="lg" name="user" value={values.user} required onChange={onChange} />
              <MDBInput wrapperClass='mb-4 w-100' label='Senha' id='formControlLg' type='password' size="lg" name="password" value={values.password} required onChange={onChange} />

              <MDBBtn type='submit' className="mb-4 w-100" size='lg' style={{ backgroundColor: '#0F1A2C' }}>Login</MDBBtn>
            </form>

          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

  );
}

export default Login;
