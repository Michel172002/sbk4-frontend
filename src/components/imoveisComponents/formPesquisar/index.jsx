import { Containner } from "./styled.js";
import { FaSearch } from "react-icons/fa";

function FormPesquisar(handleOpenModalCreate) {
  return (
    <div>
      <Containner>
        <form class="needs-validation" novalidate>
          <div class="row align-items-center">
            <div class="col-auto mb-3">
              <select class="form-select" id="selectSearch" name="selectSearch">
                <option value="rua">Rua</option>
                <option value="BAIRRO">Bairro</option>
                <option value="CIDADE">Cidade</option>
                <option value="ESTADO">Estado</option>
                <option value="CEP">CEP</option>
              </select>
            </div>
            <div class="col-md-5 mb-3">
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                placeholder="Pesquise Aqui"
                required
              />
              <div class="invalid-feedback">Please provide a valid value.</div>
            </div>
            <div class="col mb-3">
              <button class="btn btn-secondary" type="submit">
                <FaSearch />
              </button>
            </div>
            <div class="col-auto mb-3 ms-auto">
              <a
                class="btn btn-success btn-lg"
                onClick={() => handleOpenModalCreate.handleOpenModalCreate()}
                role="button"
              >
                Novo Imovel
              </a>
            </div>
          </div>
        </form>
      </Containner>
    </div>
  );
}

export default FormPesquisar;
