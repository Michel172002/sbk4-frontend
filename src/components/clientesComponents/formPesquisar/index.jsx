import { Containner } from "./styled.js";
import { FaSearch } from "react-icons/fa";

function FormPesquisar(handleOpenModal) {
  return (
    <div>
      <Containner>
        <form class="needs-validation" novalidate>
          <div class="row align-items-center">
            <div class="col-auto mb-3">
              <select class="form-select" id="selectSearch" name="selectSearch">
                <option value="nome">Nome</option>
                <option value="rg">RG</option>
                <option value="cpf">CPF</option>
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
                onClick={() => handleOpenModal.handleOpenModal()}
                role="button"
              >
                Novo Cliente
              </a>
            </div>
          </div>
        </form>
      </Containner>
    </div>
  );
}
export default FormPesquisar;
