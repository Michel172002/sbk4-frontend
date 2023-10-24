import { useState } from "react";
import { Containner } from "./styled.js";
import { FaClipboardList } from "react-icons/fa";
import sbk4Fetch from "../../../axios/config.js";
import { useEffect } from "react";
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";
import FormPesquisar from "../formPesquisar/index.jsx";
import formatPhoneNumber from "../../../utils/formatPhoneNumber.js";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Spinner from 'react-bootstrap/Spinner';

function Table({ handleOpenModalEdit, handleOpenModalDados, corretores, handleOpenModal }) {
  // const [corretores, setCorretores] = useState([]);
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const showDeleteModal = (id) => {
    setId(id);
    setAlertMessage(
      `Você tem certeza que quer excluir o Corretor ${corretores.find((x) => x.id === id).nome
      }?`
    );
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = async (id) => {
    try {
      await sbk4Fetch.delete(`/corretor/${id}`);
      setDisplayConfirmationModal(false);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sbk4Fetch.get("/corretor");
        const data = response.data;
        corretores = data.content;
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

  const filteredData = corretores.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
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
                <th className="text-white">Nome</th>
                <th className="text-white">Creci</th>
                <th className="text-white">Telefone</th>
                <th className="text-white"><MDBIcon fas icon="cog" /></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody className="overflow-y-auto">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="6">Não há registros.</td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <tr className="text-center" key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.nome}</td>
                    <td>{item.creci}</td>
                    <td>{formatPhoneNumber(item.telefone)}</td>
                    <td>
                      <div className="">
                        {/* <MDBBtn className="actionButtons" title="Detalhes" floating onClick={() => handleOpenModalDados(item)}>
                          <MDBIcon far icon="clipboard" />
                        </MDBBtn> */}
                        <MDBBtn className="actionButtons" title="Editar" floating onClick={() => handleOpenModalEdit(item)}>
                          <MDBIcon far icon="edit" />
                        </MDBBtn>
                        <MDBBtn className="actionButtons" title="Apagar" floating onClick={() => showDeleteModal(item.id)}>
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

        {/* Modal confirmação delete */}
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
