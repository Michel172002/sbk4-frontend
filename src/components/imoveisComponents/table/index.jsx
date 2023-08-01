import { useEffect, useState } from "react";
import { Containner } from "./styled.js"
import {FaClipboardList} from 'react-icons/fa';
import sbk4Fetch from "../../../axios/config.js";
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";

function Table({handleOpenModalEdit, handleOpenModalDados}){

  const [imoveis, setImoveis] = useState([])

  const getImoveis = async() => {
    try{
      const response = await sbk4Fetch.get("/imoveis/")
      const data = response.data
      setImoveis(data)
    }catch(error){
      console.log(error)
    }  
  }


  const [id, setId] = useState(null)
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null)
  
  const showDeleteModal = (id) => {
    setId(id)
    setAlertMessage(`Você tem certeza que quer excluir o Imovel '${imoveis.find((x) => x.id === id).id}'?`)
    setDisplayConfirmationModal(true)
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false)
  }

  const submitDelete = async(id) => {
    try {
      await sbk4Fetch.delete(`/imoveis/${id}`)
      setDisplayConfirmationModal(false)
      location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getImoveis()
  }, [])

    return (
        <div>
            <Containner>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">RUA</th>
      <th scope="col">PROPRIETARIO</th>
      <th scope="col">CONFIG</th>
    </tr>
  </thead>
  <tbody>
    {imoveis.length === 0 ? (<p>Sem Imoveis</p>): (
      imoveis.map((imovel) => (
        <tr>
          <th scope="row">{imovel.id}</th>
          <td>{imovel.rua}</td>
          <td>{imovel.proprietario}</td>
          <td className="teste">
            <div className="td_Button">
            <button onClick={() => handleOpenModalDados(imovel)}><FaClipboardList/></button>
            <button onClick={() => handleOpenModalEdit(imovel)}>Editar</button>
            <button onClick={() => showDeleteModal(imovel.id)}>Apagar</button>
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