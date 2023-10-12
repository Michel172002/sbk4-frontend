import { useState } from "react";
import { Containner } from "./styled.js";
import Logo from "/src/assets/logo.png";
import sbk4Fetch from '../../axios/config.js'
import useStorage from '../../utils/useStorege.js'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function initialState() {
  return { user: "", password: "" };
}

function Login() {
  const [values, setValues] = useState(initialState);
  const [token, setToken, removeToken] = useStorage('token');
  const navigate = useNavigate();

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const loaderToast = toast.loading("Fazendo o login...");

    try {
      const res = await sbk4Fetch.post('/user/login', {
        nome: values.user,
        senha: values.password
      });

      const token = res.data.token;

      setToken(token);

      toast.dismiss(loaderToast);

      navigate('/inicio');
    } catch (error) {
      console.error("Login failed", error);

      toast.dismiss(loaderToast);

      toast.error('Usuário e/ou senha incorretos.');
    }
  }

  return (
    <div>
      <Containner>
        <div class="sidenav">
          <div class="login-main-text">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div class="main">
          <div class="col-md-6 col-sm-12">
            <div class="login-form">
              <h1 class="login">Login</h1>
              <br />
              <form>
                <div class="form-group">
                  <label>Nome</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nome"
                    name="user"
                    onChange={onChange}
                    value={values.user}
                  />
                </div>
                <br />
                <div class="form-group">
                  <label>Senha</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Senha"
                    name="password"
                    onChange={onChange}
                    value={values.password}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-login"
                  onClick={handleLogin}>
                  Login
                </button>
                <button
                  type="submit"
                  class="btn btn-register "
                  formAction="/register"
                >
                  Register
                </button>
              </form>              
            </div>
          </div>
        </div>
      </Containner>
    </div>
  );
}
export default Login;
