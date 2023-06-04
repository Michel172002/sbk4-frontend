import { useState } from "react";
import { Containner } from "./styled.js"
import {FaBuffer} from 'react-icons/fa';
import sbk4Fetch from "../../../axios/config.js";
import { useEffect } from "react";
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";

function Table({handleOpenModalEdit, handleOpenModalDados}){
  const [corretores, setCorretores] = useState([])

  const getCorretores = async() => {
    try{
      const response = await sbk4Fetch.get("/corretores/")

      const data = response.data

      setCorretores(data)
    }catch(error){
      console.log(error)
    }
  }

  const [id, setId] = useState(null)
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null)
  
  const showDeleteModal = (id) => {
    setId(id)
    setAlertMessage(`Você tem certeza que quer excluir o Corretor '${corretores.find((x) => x.id === id).nome}'?`)
    setDisplayConfirmationModal(true)
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false)
  }

  const submitDelete = async(id) => {
    try {
      await sbk4Fetch.delete(`/corretores/${id}`)
      setDisplayConfirmationModal(false)
      location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCorretores()
  }, [])

  return (
    <div>
      <Containner>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOME</th>
              <th scope="col">CRECI</th>
              <th scope="col">CONFIG</th>
            </tr>
          </thead>
          <tbody>
            {corretores.length === 0 ? (<p>Sem Corretores</p>): (
              corretores.map((corretor) => (
                <tr>
                  <th scope="row">{corretor.id}</th>
                  <td>{corretor.nome}</td>
                  <td>{corretor.creci}</td>
                  <td className="teste">
                    <div className="td_Button">
                    <button onClick={() => handleOpenModalDados(corretor)}><FaBuffer/></button>
                    <button onClick={() => handleOpenModalEdit(corretor)}>Editar</button>
                    <button onClick={() => showDeleteModal(corretor.id)}>Apagar</button>
                    </div>
                  </td>
                </tr>
              ))
            )}  
          </tbody>
        </table>
        <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={alertMessage}/>
      </Containner>
    </div>
    )
}

export default Table