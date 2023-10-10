import { Containner } from "./styled.js";
import Logo from "/src/assets/logo.png";

function Register() {
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
              <h1 class="registrar">Registrar</h1>
              <br />
              <form>
                <div class="form-group">
                  <label>Nome</label>
                  <input type="text" class="form-control" placeholder="Nome" />
                </div>
                <br />
                <div class="form-group">
                  <label>Senha</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Senha"
                  />
                </div>
                <button type="submit" class="btn btn-login" formAction="/">
                  Login
                </button>
                <button type="submit" class="btn btn-register">
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
export default Register;
