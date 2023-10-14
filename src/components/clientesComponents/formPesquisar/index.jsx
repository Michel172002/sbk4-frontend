import { Containner } from "./styled.js";
import { MDBInput } from "mdb-react-ui-kit";

function FormPesquisar({ handleOpenModal, search }) {

  const handleSearch = (e) => {
    search(e.target.value);
  };

  return (
    <div className="mb-2">
      <Containner>
        <form class="needs-validation" novalidate>
          <div class="row align-items-center">
            <div class="col-md-5 mb-3">
              <MDBInput
                className="shadow"
                type="text"
                label="Pesquisar cliente"
                onChange={handleSearch}
              />
            </div>
            <div class="col-auto mb-3 ms-auto">
              <a
                class="btn btn-success btn-lg shadow"
                onClick={() => handleOpenModal()}
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
