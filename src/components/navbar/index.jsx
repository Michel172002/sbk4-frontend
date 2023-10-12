import { Containner } from './styled.js'
import { FaSignOutAlt } from 'react-icons/fa';
import useStorage from '../../utils/useStorege.js';
import { useNavigate } from 'react-router-dom';

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
            <Containner>
                <ul>
                    <button>{user}</button>
                    <li>|</li>
                    <li>
                        <button className='btn' onClick={handleLogout}>
                            <FaSignOutAlt/> Sair
                        </button>
                    </li>
                </ul>
            </Containner>
        </div>
    )
}

export default Navbar