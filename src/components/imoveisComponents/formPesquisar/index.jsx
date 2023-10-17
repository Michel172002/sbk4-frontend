import { Containner } from "./styled.js";
import { MDBInput } from "mdb-react-ui-kit";

function FormPesquisar({ handleOpenModal, search }) {
  const handleSearch = (e) => {
    search(e.target.value);
  };

  return (
    <div className="mb-2">
      <Containner>
        <form className="needs-validation" noValidate>
          <div className="row align-items-center">
            <div className="col-md-5 mb-3">
              <MDBInput
                className="shadow"
                type="text"
                label="Pesquisar imóvel"
                onChange={handleSearch}
              />
            </div>
            <div className="col-auto mb-3 ms-auto">
              <a
                className="btn btn-success btn-lg shadow"
                onClick={() => handleOpenModal()}
                role="button"
              >
                Novo Imóvel
              </a>
            </div>
          </div>
        </form>
      </Containner>
    </div>
  );
}

export default FormPesquisar;

