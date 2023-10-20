import { Containner } from "./styled.js";
import { MDBBtn, MDBInput, MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
import Form from 'react-bootstrap/Form';

function FormPesquisar({ handleOpenModal, search }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    await search(filter, query);
    setQuery("")
    setFilter("")
  };

  const resetFilters = () => {
    search("", "");
  }

  return (
    <div className="mb-2">
      <Containner>
        <form className="needs-validation" onSubmit={handleSearch} noValidate>
          <div className="row align-items-center">
            <div className="col-md-2 mb-3">
              <Form.Select
                className="shadow"
                onChange={(e) => setFilter(e.target.value)}
              >
                {/* <option value={null}>FIltrar</option> */}
                <option value="tipo">Tipo</option>
                <option value={'alugando'}>Aluguel</option>
                <option value={'compra'}>Compra</option>
                <option value="preco">Preço máx.</option>
                <option value="bairro">Bairro</option>
                <option value="cidade">Cidade</option>
              </Form.Select>
            </div>
            <div className="col-md-4 mb-3">
              <MDBInput
                className="shadow"
                type="text"
                label="Pesquisar imóvel"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
            </div>
            <div className="col-md-2 mb-3">
              <MDBBtn className="actionButtons" title="Pesquisar" type="submit" floating>
                <MDBIcon fas icon="search" />
              </MDBBtn>
              <MDBBtn className="actionButtons" onClick={resetFilters} title="Resetar filtros" type="button" floating style={{marginLeft: '.75rem'}}>
                <MDBIcon fas icon="redo" />
              </MDBBtn>
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
