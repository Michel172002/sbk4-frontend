import { useEffect, useState } from "react";
import sbk4Fetch from "../../../axios/config.js";
import { Containner } from "./styled.js";
import { FaClipboardList } from "react-icons/fa";
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";

function Table({ handleOpenModalEdit, handleOpenModalDados }) {
  const [clientes, setClientes] = useState([]);

  const getClientes = async () => {
    try {
      const response = await sbk4Fetch.get("/cliente");

      const data = response.data;
      setClientes(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const showDeleteModal = (id) => {
    setId(id);
    setAlertMessage(
      `Você tem certeza que quer excluir o cliente '${
        clientes.find((x) => x.id === id).nome
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

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <div>
      <Containner>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOME</th>
              <th scope="col">TELEFONE</th>
              <th scope="col">Config</th>
            </tr>
          </thead>

          <tbody>
            {clientes.length === 0 ? (
              <p>Sem Clientes</p>
            ) : (
              clientes.map((cliente) => (
                <tr>
                  <th scope="row">{cliente.id}</th>
                  <td>{cliente.nome}</td>
                  <td>{cliente.telefone}</td>
                  <td className="teste">
                    <div className="td_Button">
                      <button onClick={() => handleOpenModalDados(cliente)}>
                        <FaClipboardList />
                      </button>
                      <button onClick={() => handleOpenModalEdit(cliente)}>
                        Editar
                      </button>
                      <button onClick={() => showDeleteModal(cliente.id)}>
                        Apagar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <DeleteConfirmation
          showModal={displayConfirmationModal}
          confirmModal={submitDelete}
          hideModal={hideConfirmationModal}
          id={id}
          message={alertMessage}
        />
      </Containner>
    </div>
  );
}

export default Table;
