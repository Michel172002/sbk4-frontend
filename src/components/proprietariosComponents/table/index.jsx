import { useEffect, useState } from "react";
import { Containner } from "./styled.js"
import {FaBuffer} from 'react-icons/fa';
import sbk4Fetch from "../../../axios/config.js";
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";

function Table(handleOpenModal){

  const [proprietarios, setProprietarios] = useState([])

  const getProprietarios = async() => {
    try{
      const response = await sbk4Fetch.get("/proprietarios/")
      const data = response.data
      setProprietarios(data)
    }catch(error){
      console.log(error)
    }
  }

  const [id, setId] = useState(null)
  const [imoveis, setImoveis] = useState([])
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null)

  const getImoveisProprietarios = async(idProp) => {
    try{
      const response = await sbk4Fetch.get("/imoveis/")
      const data = response.data
      setImoveis(data)
      
      var imovelList = []
      imoveis.forEach(imovel => {
        if(imovel.proprietario === idProp){
          imovelList.push(imovel)
        }
      });
      setImoveis(imovelList)
    }catch(error){
      console.log(error)
    } 
  }
  
  const showDeleteModal = (id) => {
    setId(id)
    getImoveisProprietarios(id)
    setAlertMessage(`Você tem certeza que quer excluir o proprietario '${proprietarios.find((x) => x.id === id).nome}'?`)
    setDisplayConfirmationModal(true)
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false)
  }

  const submitDelete = async(id) => {
    try {
      imoveis.map(async(imovel) => 
        await sbk4Fetch.delete(`/imoveis/${imovel.id}`)
      )

      await sbk4Fetch.delete(`/proprietarios/${id}`)
      setDisplayConfirmationModal(false)
      location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProprietarios()
  }, [])

  return (
    <div>
      <Containner>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOME</th>
              <th scope="col">TELEFONE</th>
              <th scope="col">CONFIG</th>
            </tr>
          </thead>
          <tbody>
            {proprietarios.length === 0 ? (<p>Sem Proprietarios</p>): (
              proprietarios.map((proprietario) => (
                <tr>
                  <th scope="row">{proprietario.id}</th>
                  <td>{proprietario.nome}</td>
                  <td>{proprietario.n_tel}</td>
                  <td className="teste">
                    <div className="td_Button">
                    <button onClick={() => handleOpenModal.handleOpenModal()}><FaBuffer/></button>
                    <button>Editar</button>
                    <button onClick={() => showDeleteModal(proprietario.id)}>Apagar</button>
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