import { Containner } from './styled.js'
import useStorage from '../../utils/useStorege.js';
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBIcon, MDBBadge, MDBContainer } from 'mdb-react-ui-kit';
import { BiSolidUserCircle } from 'react-icons/bi'


function Navbar() {
  const [user, setUser, removeUser] = useStorage('user');
  const [token, setToken, removeToken] = useStorage('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken()
    removeUser()
    navigate('/login');
  }

  const handleConfig = () => {
    navigate('/config')
  }

  return (
    <div>
      <Containner className='d-flex justify-content-between border rounded'>
        <div>
          <h3><BiSolidUserCircle /> {user}</h3>
        </div>
        <ul>
          <li>
            <MDBBtn size='lg' title='Configurações' floating onClick={handleConfig}>
              <MDBIcon fas icon="cog" />
            </MDBBtn>
          </li>
          <li>
            <MDBBtn size='lg' title='Sair' floating onClick={handleLogout}>
              <MDBIcon fas icon="sign-out-alt" />
            </MDBBtn>
          </li>
        </ul>
      </Containner>
    </div>
  )
}

export default Navbar
