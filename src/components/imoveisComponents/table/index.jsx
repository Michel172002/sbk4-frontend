import { useEffect, useState } from "react";
import { Containner } from "./styled.js";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Spinner from 'react-bootstrap/Spinner';
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";
import FormPesquisar from "../formPesquisar/index.jsx";
import formatPhoneNumber from '../../../utils/formatPhoneNumber.js';
import formatCurrency from "../../../utils/formatCurrency.js";
import sbk4Fetch from "../../../axios/config.js";

function Table({ handleOpenModalEdit, handleOpenModalDados, handleOpenModal, imoveis }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const showDeleteModal = (id) => {
    setId(id);
    setAlertMessage(`Você tem certeza que quer excluir o Imovel ${imoveis.find((x) => x.id === id).id}?`);
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = async (id) => {
    try {
      await sbk4Fetch.delete(`/imovel/${id}`);
      setDisplayConfirmationModal(false);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sbk4Fetch.get("/imovel");
        const data = response.data;
        imoveis = data.content;
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pesquisa table
  const search = (query) => {
    setSearchTerm(query);
  };

  const filteredData = imoveis.filter((item) =>
    item.proprietario.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <FormPesquisar handleOpenModal={handleOpenModal} search={search} />
      <Containner>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center m-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <MDBTable hover responsive>
            <MDBTableHead className="thead">
              <tr className="text-center">
                <th className="text-white">#</th>
                <th className="text-white">Tipo</th>
                <th className="text-white">Disp. para</th>
                {/* <th className="text-white">Preço</th> */}
                <th className="text-white">Bairro</th>
                <th className="text-white">Cidade</th>
                <th className="text-white">Config</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {imoveis.length === 0 ? (
                <tr>
                  <td colSpan="7">Sem Imoveis</td>
                </tr>
              ) : (
                filteredData.map((imovel, index) => (
                  <tr className="text-center" key={index}>
                    <th scope="row">{imovel.id}</th>
                    <td>{imovel.tipo}</td>
                    <td>{imovel.alugando ? "Aluguel" : "Compra"}</td>
                    {/* <td>{formatCurrency(imovel.preco)}</td> */}
                    <td>{imovel.bairro}</td>
                    <td>{imovel.cidade}</td>
                    <td>
                      <div className="">
                        <MDBBtn className="actionButtons" title="Detalhes" floating onClick={() => handleOpenModalDados(imovel)}>
                          <MDBIcon far icon="clipboard" />
                        </MDBBtn>
                        <MDBBtn className="actionButtons" title="Editar" floating onClick={() => handleOpenModalEdit(imovel)}>
                          <MDBIcon far icon="edit" />
                        </MDBBtn>
                        <MDBBtn className="actionButtons" title="Apagar" floating onClick={() => showDeleteModal(imovel.id)}>
                          <MDBIcon far icon="trash-alt" />
                        </MDBBtn>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </MDBTableBody>
          </MDBTable>
        )}

        <DeleteConfirmation
          showModal={displayConfirmationModal}
          confirmModal={submitDelete}
          hideModal={hideConfirmationModal}
          id={id}
          message={alertMessage}
        />
      </Containner>
    </>
  );
}

export default Table;
