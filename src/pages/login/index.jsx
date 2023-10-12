import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard } from 'mdb-react-ui-kit';
import sbk4Fetch from '../../axios/config.js';
import useStorage from '../../utils/useStorege.js';
import jwtDecode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo.png';
import styled from 'styled-components';


const StyledAside = styled(MDBCol)`
  background: linear-gradient(45deg, #0F1A2C, #1E2F46);
  padding-top: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 5px solid transparent;
`;

const StyledButton = styled(MDBBtn)`
  background-color: #0F1A2C;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #1E2F46;
    color: #fff;
  }

  &:focus {
    outline: none;
    background-color: #1E2F46;
    color: #fff;
  }

  &:active {
    background-color: #0D1827;
    color: #fff;
  }
`;

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
        <StyledAside sm="7" className='d-flex align-items-center justify-content-center shadow'>
          <img src={logo} alt="Logo" className="img-fluid p-3" />
        </StyledAside>
        <MDBCol sm="5" className='d-flex align-items-center justify-content-center shadow'>
          <MDBCard className='m-3 p-3 w-75 shadow'>
            <h3 className="fw-bold mb-3 text-center mt-4">Log in</h3>

            <form onSubmit={handleLogin}>
              <MDBInput wrapperClass='mb-4 w-100' label='Nome' id='formControlLg' type='text' size="lg" name="user" value={values.user} required onChange={onChange} />
              <MDBInput wrapperClass='mb-4 w-100' label='Senha' id='formControlLg' type='password' size="lg" name="password" value={values.password} required onChange={onChange} />

              <StyledButton type='submit' className={`mb-4 w-100`} size='lg'>
                Login
              </StyledButton>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
