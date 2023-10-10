import sbk4Fetch from "../../../../axios/config.js";
import { Containner } from "./styled.js";

import { useState } from "react";

const ShortPropriedades = () => {
  const [nome, setName] = useState();
  const [telefone, setTel] = useState();
  const [creci, setCreci] = useState();

  const createCorretor = async (e) => {
    e.preventDefault();

    const corretor = { nome, telefone, creci, ativo: true };

    try {
      await sbk4Fetch.post("/corretor", corretor);
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
        onSubmit={(e) => createCorretor(e)}
      >
        <div class="col align-self-center">
          <div class="row justify-content-center">
            <div class="col-auto mb-3">
              <label htmlFor="nome">Nome</label>
            </div>
            <div class="col-auto mb-3">
              <input
                class="form-control"
                type={"text"}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div class="col-auto mb-3">
              <label htmlFor="creci">Creci</label>
            </div>
            <div class="col-auto mb-3">
              <input
                class="form-control"
                type={"text"}
                onChange={(e) => setCreci(e.target.value)}
              ></input>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-auto mb-3">
              <label htmlFor="telefone">Telefone</label>
            </div>
            <div class="col-auto mb-3">
              <input
                class="form-control"
                type={"text"}
                onChange={(e) => setTel(e.target.value)}
              ></input>
            </div>
            <div class="col-auto setoff-mb-3">
              <input
                type="submit"
                value="Criar Corretor"
                class="btn btn-success btn-lg"
              />
            </div>
          </div>
        </div>
      </form>
    </Containner>
  );
};
export default ShortPropriedades;
