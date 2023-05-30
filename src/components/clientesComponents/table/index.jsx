import { useEffect, useState } from "react";
import sbk4Fetch from "../../../axios/config.js";
import { Containner } from "./styled.js"
import {FaBuffer} from 'react-icons/fa';

function Table(){

  const [clientes, setClientes] = useState([])

  const getClientes = async() => {

    try{
      const response = await sbk4Fetch.get("/clientes/")

      const data = response.data

      setClientes(data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getClientes()
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
                    <th scope="col">Config</th>
                  </tr>
                </thead>

                <tbody>
                  {clientes.length === 0 ? (<p>Sem Clientes</p>): (
                    clientes.map((cliente) => (
                      <tr>
                        <th scope="row">{cliente.id}</th>
                        <td>{cliente.nome}</td>
                        <td>{cliente.n_tel}</td>
                        <td className="teste">
                          <div className="td_Button">
                          <button><FaBuffer/></button>
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