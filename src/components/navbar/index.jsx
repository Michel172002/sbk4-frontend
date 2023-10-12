import { Containner } from './styled.js'
import useStorage from '../../utils/useStorege.js';
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBIcon, MDBBadge } from 'mdb-react-ui-kit';
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

  return (
    <div>
      <Containner className='d-flex justify-content-between'>
        <div>
          <h3><BiSolidUserCircle /> {user}</h3>
        </div>
        <ul>
          <li>
            <MDBBtn size='lg' floating>
              <MDBIcon fas icon="cog" />
            </MDBBtn>
          </li>
          <li>
            <MDBBtn size='lg' floating onClick={handleLogout}>
              <MDBIcon fas icon="sign-out-alt" />
            </MDBBtn>
          </li>
        </ul>
      </Containner>
    </div>
  )
}

export default Navbar
