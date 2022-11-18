import { Containner } from "./styled.js"
import {FaBuffer} from 'react-icons/fa';

function Table(handleOpenModal){
    return (
        <div>
            <Containner>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Config</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button onClick={() => handleOpenModal.handleOpenModal()}><FaBuffer/></button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="teste">
        <div className="td_Button">
        <button>teste</button>
        <button>teste</button>
        <button>teste</button>
        </div>
      </td>
    </tr>
    
    
  </tbody>
</table>


            </Containner>
        </div>
    )
}

export default Table