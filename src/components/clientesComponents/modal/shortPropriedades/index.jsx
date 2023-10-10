import { useState } from "react";
import { Containner } from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";

const ShortPropriedades = () => {
  const [nome, setNome] = useState("");
  const [dataNas, setDataNasm] = useState("");
  const [sexo, setSexo] = useState(true);
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [identificacao, setTipoDoc] = useState("");
  const [identificacaoNumber, setNumDoc] = useState("");
  const [observacao, setObservacao] = useState("");
  const [procTipo, setProcTipo] = useState("");
  const [procAlugando, setAlugar] = useState(true);
  const [procComodos, setComodos] = useState("");

  const createCliente = async (e) => {
    e.preventDefault()

    const cliente = {
      nome,
      dataNas,
      sexo,
      telefone,
      email,
      identificacao,
      identificacaoNumber,
      observacao,
      procTipo,
      procAlugando,
      procComodos,
    };

    try {
      await sbk4Fetch.post("/cliente", cliente);
    } catch (error) {
      console.log(error);
    }
    location.reload();
  };

  return (
    <Containner>
      <form
        class="needs-validation"
        novalidate
        onSubmit={(e) => createCliente(e)}
      >
        <div class="col align-self-center">
          <div class="row justify-content-around">
            <div class="col-auto">
              <div>
                <label htmlFor="nome">Nome</label>
              </div>
              <div>
                <input
                  class="form-control"
                  type={"text"}
                  onChange={(e) => setNome(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-auto">
              <div>
                <label htmlFor="nascimento">Data de Nascimento</label>
              </div>
              <div>
                <input
                  class="form-control"
                  type={"date"}
                  onChange={(e) => setDataNasm(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-auto mb-2">
              <div>
                <label htmlFor="telefone">Telefone</label>
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type={"number"}
                  onChange={(e) => setTelefone(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-auto">
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type={"email"}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-auto">
              <label htmlFor="sexo">Sexo</label>
              <div>
                <select
                  class="form-control"
                  name="sexo"
                  id="selectSexo"
                  onChange={(e) => setSexo(e.target.value === "true")}
                >
                  <option value={"true"}>Homem</option>
                  <option value={"false"}>Mulher</option>
                </select>
              </div>
            </div>
            <div class="col-auto mb-3">
              <div class="col-3">
                <select
                  class="form-control"
                  name="indentificacao"
                  id="selectDoc"
                  onChange={(e) => setTipoDoc(e.target.value)}
                >
                  <option value={"RG"}>RG</option>
                  <option value={"CPF"}>CPF</option>
                  <option value={"CNPJ"}>CNPJ</option>
                </select>
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type={"number"}
                  onChange={(e) => setNumDoc(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="row justify-content-around">
              <div class="col-auto">
                <label htmlFor="procura">Procurando</label>
                <input
                  class="form-control"
                  type={"text"}
                  onChange={(e) => setProcTipo(e.target.value)}
                ></input>
              </div>

              <div class="col-auto mb-3">
                <div>
                  <div>
                    <label htmlFor="comodos">Comodos</label>
                  </div>
                  <div class="col-auto mb-2">
                    <input
                      class="form-control"
                      type={"text"}
                      onChange={(e) => setComodos(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-auto offset-md-3">
                    <label htmlFor="tipo">Tipo</label>
                    <div>
                      <div>
                        <input
                          type="radio"
                          id="alugar"
                          name="tipoRadio"
                          value={true}
                          onChange={() => setAlugar(true)}
                        ></input>
                        <label htmlFor="alugar">Alugar</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="comprar"
                          name="tipoRadio"
                          value={false}
                          onChange={() => setAlugar(false)}
                        ></input>
                        <label htmlFor="comprar">Comprar</label>
                      </div>
                    </div>
                  </div>
                  <label>Observações</label>
                  <input
                    class="form-control"
                    type="text"
                    onChange={(e) => setObservacao(e.target.value)}
                  />
                </div>
                <div class="col-auto">
                  <input class="btn btn-success btn-lg" type={"submit"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Containner>
  );
};
export default ShortPropriedades;
