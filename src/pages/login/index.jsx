import { useState } from "react";
import { Containner } from "./styled.js";
import Logo from "/src/assets/logo.png";
import sbk4Fetch from '../../axios/config.js'
import useStorage from '../../utils/useStorege.js'
import jwtDecode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function initialState() {
  return { user: "", password: "" };
}

function Login() {
  const [values, setValues] = useState(initialState);
  const [token, setToken, removeToken] = useStorage('token');
  const [user, setUser, removeUser] = useStorage('user');
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
      
      const decoded = await jwtDecode(token);
      setUser(decoded.sub);

      toast.dismiss(loaderToast);

      navigate('/');
    } catch (error) {
      console.error("Login failed", error);

      toast.dismiss(loaderToast);

      toast.error('Usuário e/ou senha incorretos.');
    }
  }

  return (
    <div>
      <Containner>
        <div className="sidenav">
          <div className="login-main-text">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="main">
          <div className="col-md-6 col-sm-12">
            <div className="login-form">
              <h1 className="login">Login</h1>
              <br />
              <form>
                <div className="form-group">
                  <label>Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    name="user"
                    onChange={onChange}
                    value={values.user}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Senha"
                    name="password"
                    onChange={onChange}
                    value={values.password}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-login"
                  onClick={handleLogin}>
                  Login
                </button>
                {/* <button
                  type="submit"
                  className="btn btn-register "
                  formAction="/register"
                >
                  Register
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </Containner>
    </div>
  );
}
export default Login;
