import { useState } from "react";
import { Containner } from "./styled.js";
import Logo from "/src/assets/logo.png";

function initialState() {
  return { user: "", password: "" };
}

function Login() {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
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
                <button type="submit" class="btn btn-login" formAction="/">
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
