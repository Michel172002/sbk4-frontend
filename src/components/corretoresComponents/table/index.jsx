import { useState } from "react";
import { Containner } from "./styled.js"
import {FaBuffer} from 'react-icons/fa';
import sbk4Fetch from "../../../axios/config.js";
import { useEffect } from "react";

function Table(handleOpenModal){

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