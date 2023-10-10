import { useEffect, useState } from "react";
import sbk4Fetch from "../../../../axios/config.js";
import { Containner } from "./styled.js";

function ShortPropriedades() {
  const [proprietarios, setProprietarios] = useState([]);

  const getProprietarios = async () => {
    try {
      const response = await sbk4Fetch.get("/proprietario");
      const data = response.data;
      setProprietarios(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const [idProp, setIdProp] = useState();
  const [tipo, setTipo] = useState("CASA");
  const [preco, setPreco] = useState();
  const [alugando, setAlugando] = useState(false);
  const [financia, setFinancia] = useState(false);
  const [area, setArea] = useState();
  const [rua, setRua] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [numero, setNumero] = useState();
  const [complemento, setComplemento] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();
  const [comodos, setComodos] = useState();
  const [descricao, setDescricao] = useState();

  const createImovel = async (e) => {
    e.preventDefault();
    const imovel = {
      idProp,
      tipo,
      preco,
      alugando,
      financia,
      area,
      rua,
      bairro,
      cidade,
      numero,
      complemento,
      estado,
      cep,
      comodos,
      descricao,
    };

    try {
      await sbk4Fetch.post("/imovel", imovel);
    } catch (error) {
      console.log(error);
    }
    location.reload();
  };

  useEffect(() => {
    getProprietarios();

    if (proprietarios.length >= 1) {
      setIdProp(proprietarios[0].id);
    }
  }, [proprietarios]);

  return (
    <Containner>
      <form
        class="needs-validation"
        novalidate
        onSubmit={(e) => createImovel(e)}
      >
        <div class="col align-self-center">
          <div class="row justify-content-around">
            <div class="col-8">
              <div>
                <label htmlFor="nome">Rua</label>
              </div>
              <div>
                <input
                  class="form-control"
                  type={"text"}
                  onChange={(e) => setRua(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-2 mb-2">
              <div>
                <label htmlFor="numero">Numero</label>
              </div>
              <div>
                <input
                  class="form-control"
                  type={"text"}
                  onChange={(e) => setNumero(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-auto mb-2">
              <div>
                <label htmlFor="bairro">Bairro</label>
              </div>
              <div>
                <input
                  class="form-control"
                  type={"text"}
                  onChange={(e) => setBairro(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-auto mb-2">
              <div>
                <label htmlFor="estado">Cidade</label>
              </div>
              <div>
                <input
                  class="form-control"
                  type={"text"}
                  onChange={(e) => setCidade(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-auto mb-2">
              <div>
                <label htmlFor="estado">Estado</label>
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type={"text"}
                  onChange={(e) => setEstado(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-auto">
              <div>
                <label htmlFor="cep">CEP</label>
              </div>
              <div class="col-5">
                <input
                  class="form-control"
                  type={"text"}
                  onChange={(e) => setCep(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-8 mb-3">
              <div>
                <label htmlFor="complemento">Complemento</label>
              </div>
              <div class="col-5">
                <input
                  class="form-control"
                  type={"text"}
                  onChange={(e) => setComplemento(e.target.value)}
                ></input>
              </div>
            </div>

            <div class="col-auto">
              <label htmlFor="proprietario">Proprietario</label>
              <select
                class="form-control"
                name="idProp"
                id="idProp"
                onChange={(e) => setIdProp(e.target.value)}
              >
                {proprietarios.length === 0 ? (
                  <option value={null}>Sem Proprietarios</option>
                ) : (
                  proprietarios.map((proprietario) => (
                    <option value={proprietario.id}>{proprietario.nome}</option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-3">
              <div>
                <label htmlFor="preco">Preco</label>
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type={"number"}
                  onChange={(e) => setPreco(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-3">
              <label htmlFor="tipo">Tipo</label>
              <div>
                <select
                  class="form-control"
                  name="tipo"
                  id="selectTipo"
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option value={"CASA"}>Casa</option>
                  <option value={"APARTAMENTO"}>Apartamento</option>
                  <option value={"LOTE"}>Lote</option>
                  <option value={"SALA COMERCIAL"}>Sala Comercial</option>
                  <option value={"KIT NET"}>Kit Net</option>
                  <option value={"CHACARA"}>Chacara</option>
                  <option value={"TERRENO"}>Terreno</option>
                </select>
              </div>
            </div>
            <div class="col-2">
              <label htmlFor="tipo">Financia</label>
              <div>
                <input
                  type="radio"
                  id="sim"
                  name="financiaRadio"
                  value={"sim"}
                  onChange={() => setFinancia(true)}
                ></input>
                <label htmlFor="sim">Sim</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="nao"
                  name="financiaRadio"
                  value={"nao"}
                  onChange={() => setFinancia(false)}
                ></input>
                <label htmlFor="nao">Não</label>
              </div>
            </div>
            <div class="col-3 ">
              <label htmlFor="tipo">ALUGAR/VENDER</label>
              <div>
                <input
                  type="radio"
                  id="alugar"
                  name="tipoRadio"
                  value={"alugar"}
                  onChange={() => setAlugando(true)}
                ></input>
                <label htmlFor="alugar">Alugar</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="comprar"
                  name="tipoRadio"
                  value={"comprar"}
                  onChange={() => setAlugando(false)}
                ></input>
                <label htmlFor="comprar">Vender</label>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-3 mb-2">
                <div>
                  <label htmlFor="email">Comodos</label>
                </div>
                <div>
                  <input
                    class="form-control"
                    type={"text"}
                    onChange={(e) => setComodos(e.target.value)}
                  ></input>
                </div>
              </div>
              <div class="col-3">
                <div>
                  <label htmlFor="email">Area</label>
                </div>
                <div>
                  <input
                    class="form-control"
                    type={"text"}
                    onChange={(e) => setArea(e.target.value)}
                  ></input>
                </div>
              </div>
              <div class="col-6">
                <div>
                  <label htmlFor="email">Descricao</label>
                </div>
                <div>
                  <input
                    class="form-control"
                    type={"text"}
                    onChange={(e) => setDescricao(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <input class="btn btn-success btn-lg" type={"submit"} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Containner>
  );
}
export default ShortPropriedades;
