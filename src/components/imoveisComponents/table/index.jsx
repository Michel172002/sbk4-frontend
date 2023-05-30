import { useEffect, useState } from "react";
import { Containner } from "./styled.js"
import {FaBuffer} from 'react-icons/fa';
import sbk4Fetch from "../../../axios/config.js";

function Table(handleOpenModal){

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