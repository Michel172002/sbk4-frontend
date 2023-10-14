import { useState } from "react";
import sbk4Fetch from "../../../axios/config.js";
import { Containner } from "./styled.js";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";
import FormPesquisar from "../formPesquisar/index.jsx";
import formatPhoneNumber from '../../../utils/formatPhoneNumber.js'

const Table = ({ handleOpenModalEdit, handleOpenModalDados, clientes, handleOpenModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const showDeleteModal = (id) => {
    setId(id);
    setAlertMessage(
      `Você tem certeza que quer excluir o cliente '${clientes.find((x) => x.id === id).nome
      }'?`
    );
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = async (id) => {
    try {
      await sbk4Fetch.delete(`/cliente/${id}`);
      setDisplayConfirmationModal(false);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Pesquisa table
  const search = (query) => {
    setSearchTerm(query);
  };

  const filteredData = clientes.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <FormPesquisar handleOpenModal={handleOpenModal} search={search} />
      <Containner>
        <MDBTable hover responsive>
          <MDBTableHead className="thead">
            <tr className="text-center">
              <th className="text-white">#</th>
              <th className="text-white">Nome</th>
              <th className="text-white">Telefone</th>
              <th className="text-white">Procurando</th>
              <th className="text-white">Comodos</th>
              <th className="text-white">Tipo</th>
              <th className="text-white"><MDBIcon fas icon="cog" /></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
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
                  <td>{item.procTipo}</td>
                  <td>{item.procComodos}</td>
                  <td>{item.procAlugando ? "Aluguel" : "Compra"}</td>
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
};

export default Table;























// import { useEffect, useState } from "react";
// import sbk4Fetch from "../../../axios/config.js";
// import { Containner } from "./styled.js";
// import { FaClipboardList } from "react-icons/fa";
// import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";

// function Table({ handleOpenModalEdit, handleOpenModalDados }) {
//   const [clientes, setClientes] = useState([]);

//   const getClientes = async () => {
//     try {
//       const response = await sbk4Fetch.get("/cliente");

//       const data = response.data;
//       setClientes(data.content);
//     } catch (error) {
//       console.log(error);
//     }
//   };

// const [id, setId] = useState(null);
// const [displayConfirmationModal, setDisplayConfirmationModal] =
//   useState(false);
// const [alertMessage, setAlertMessage] = useState(null);

// const showDeleteModal = (id) => {
//   setId(id);
//   setAlertMessage(
//     `Você tem certeza que quer excluir o cliente '${
//       clientes.find((x) => x.id === id).nome
//     }'?`
//   );
//   setDisplayConfirmationModal(true);
// };

// const hideConfirmationModal = () => {
//   setDisplayConfirmationModal(false);
// };

// const submitDelete = async (id) => {
//   try {
//     await sbk4Fetch.delete(`/cliente/${id}`);
//     setDisplayConfirmationModal(false);
//     location.reload();
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   getClientes();
// }, []);

//   return (
//     <div>
//       <Containner>
//         <table class="table">
//           <thead class="thead-dark">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">NOME</th>
//               <th scope="col">TELEFONE</th>
//               <th scope="col">Config</th>
//             </tr>
//           </thead>

//           <tbody>
//             {clientes.length === 0 ? (
//               <p>Sem Clientes</p>
//             ) : (
//               clientes.map((cliente) => (
//                 <tr>
//                   <th scope="row">{cliente.id}</th>
//                   <td>{cliente.nome}</td>
//                   <td>{cliente.telefone}</td>
// <td className="teste">
//   <div className="td_Button">
//     <button onClick={() => handleOpenModalDados(cliente)}>
//       <FaClipboardList />
//     </button>
//     <button onClick={() => handleOpenModalEdit(cliente)}>
//       Editar
//     </button>
//     <button onClick={() => showDeleteModal(cliente.id)}>
//       Apagar
//     </button>
//   </div>
// </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
// <DeleteConfirmation
//   showModal={displayConfirmationModal}
//   confirmModal={submitDelete}
//   hideModal={hideConfirmationModal}
//   id={id}
//   message={alertMessage}
// />
//       </Containner>
//     </div>
//   );
// }

// export default Table;
