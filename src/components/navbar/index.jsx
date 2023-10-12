import { Containner } from './styled.js'
import { FaBell } from 'react-icons/fa';
import useStorage from '../../utils/useStorege.js';

function Navbar() {
    const [user, setUser, removeUser] = useStorage('user')

    return (
        <div>
            <Containner>
                <ul>
                    <li><a href=""><FaBell /></a></li>
                    <li>|</li>
                    <button>{user}</button>
                    <li><a href="/login">Sair</a></li>
                </ul>
            </Containner>
        </div>
    )
}

export default Navbar