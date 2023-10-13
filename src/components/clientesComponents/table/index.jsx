import { useEffect, useState } from "react";
import sbk4Fetch from "../../../axios/config.js";
import { Containner } from "./styled.js";
import { FaClipboardList } from "react-icons/fa";
import { MDBTable, MDBTableHead, MDBTableBody, MDBInput } from 'mdb-react-ui-kit';
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";

const Table = ({ handleOpenModalEdit, handleOpenModalDados }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clientes, setClientes] = useState([]);
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  // Cliente
  const getClientes = async () => {
    try {
      const response = await sbk4Fetch.get("/cliente");

      const data = response.data;

      setClientes(data.content);
    } catch (error) {
      console.log(error);
    }
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

  useEffect(() => {
    getClientes();
  }, []);

  // Modais
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

  // Pesquisa table
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = clientes.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Containner>
      <div className="mb-4">
        <MDBInput
          type="text"
          label="Search by name"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      <MDBTable hover responsive>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Procurando</th>
            <th>Config</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredData.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.nome}</td>
              <td>{item.telefone}</td>
              <td>{item.procTipo}</td>
              <td>
                <div className="td_Button">
                  <button onClick={() => handleOpenModalDados(item)}>
                    <FaClipboardList />
                  </button>
                  <button onClick={() => handleOpenModalEdit(item)}>
                    Editar
                  </button>
                  <button onClick={() => showDeleteModal(item.id)}>
                    Apagar
                  </button>
                </div>
              </td>
            </tr>
          ))}
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
