import { useEffect, useState } from "react";
import { Containner } from "./styled.js"
import {FaBuffer} from 'react-icons/fa';
import sbk4Fetch from "../../../axios/config.js";

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
                    <button>teste</button>
                    <button>teste</button>
                    </div>
                  </td>
                </tr>
              ))
            )}    
          </tbody>
        </table>
      </Containner>
    </div>
  )
}

export default Table