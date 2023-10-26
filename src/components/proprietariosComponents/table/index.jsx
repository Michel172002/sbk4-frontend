import { useEffect, useState } from "react";
import { Containner } from "./styled.js";
import { FaClipboardList } from "react-icons/fa";
import sbk4Fetch from "../../../axios/config.js";
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Spinner from 'react-bootstrap/Spinner';
import FormPesquisar from "../formPesquisar/index.jsx";
import formatPhoneNumber from "../../../utils/formatPhoneNumber.js";


function Table({ handleOpenModalEdit, handleOpenModalDados, proprietarios, handleOpenModal }) {
  // const [proprietarios, setProprietarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [id, setId] = useState(null);
  const [imoveis, setImoveis] = useState([]);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const showDeleteModal = (id) => {
    setId(id);
    getImoveisProprietarios(id);
    setAlertMessage(
      `Você tem certeza que quer excluir o proprietario ${proprietarios.find((x) => x.id === id).nome
      } e seus imoveis?`
    );
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const getImoveisProprietarios = async (idProp) => {
    try {
      const response = await sbk4Fetch.get("/imovel");
      const data = response.data;

      var imovelList = [];
      data.content.forEach((imovel) => {
        if (imovel.proprietario.id === idProp) {
          imovelList.push(imovel);
        }
      });

      setImoveis(imovelList);
    } catch (error) {
      console.log(error);
    }
  };


  const submitDelete = async (id) => {
    try {
      imoveis.map(
        async (imovel) => await sbk4Fetch.delete(`/imovel/${imovel.id}`)
      );

      await sbk4Fetch.delete(`/proprietario/${id}`);
      setDisplayConfirmationModal(false);
    } catch (error) {
      console.log(error);
    }
    location.reload();
  };

  const fetchData = async () => {
    try {
      const response = await sbk4Fetch.get("/imovel");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {


    fetchData();
  }, [])

  // Pesquisa table
  const search = (query) => {
    setSearchTerm(query);
  };

  const filteredData = proprietarios.filter((item) =>
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
                <th className="text-white">Telefone</th>
                <th className="text-white">E-mail</th>
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
                    <td>{formatPhoneNumber(item.telefone)}</td>
                    <td>{item.email}</td>
                    <td>
                      <div className="">
                        <MDBBtn className="actionButtons" title="Detalhes" floating onClick={() => handleOpenModalDados(item)}>
                          <MDBIcon far icon="clipboard" />
                        </MDBBtn>
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



