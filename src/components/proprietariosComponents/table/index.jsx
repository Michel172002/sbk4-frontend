import { useEffect, useState } from "react";
import { Containner } from "./styled.js"
import {FaClipboardList} from 'react-icons/fa';
import sbk4Fetch from "../../../axios/config.js";
import DeleteConfirmation from "../../deleteAlert/DeleteConfirmation.jsx";

function Table({handleOpenModalEdit, handleOpenModalDados}){

  const [proprietarios, setProprietarios] = useState([])

  const getProprietarios = async() => {
    try{
      const response = await sbk4Fetch.get("/proprietario")
      const data = response.data
      setProprietarios(data.content)
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
      const response = await sbk4Fetch.get("/imovel");
      const data = response.data;
  
      var imovelList = [];
      data.content.forEach(imovel => {
        if(imovel.proprietario.id === idProp){
          imovelList.push(imovel);
        }
      });
  
      setImoveis(imovelList);
    } catch(error){
      console.log(error);
    } 
  }  
  
  const showDeleteModal = (id) => {
    setId(id)
    getImoveisProprietarios(id)
    setAlertMessage(`Você tem certeza que quer excluir o proprietario '${proprietarios.find((x) => x.id === id).nome}' e seus imoveis?`)
    setDisplayConfirmationModal(true)
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false)
  }

  const submitDelete = async(id) => {
    try {
      imoveis.map(async(imovel) => 
        await sbk4Fetch.delete(`/imovel/${imovel.id}`)
      )

      await sbk4Fetch.delete(`/proprietario/${id}`)
      setDisplayConfirmationModal(false)
    } catch (error) {
      console.log(error);
    }
    location.reload()
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
                  <td>{proprietario.telefone}</td>
                  <td className="teste">
                    <div className="td_Button">
                    <button onClick={() => handleOpenModalDados(proprietario)}><FaClipboardList/></button>
                    <button onClick={() => handleOpenModalEdit(proprietario)}>Editar</button>
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