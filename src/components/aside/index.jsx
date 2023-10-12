import { Containner } from './styled.js'
import Logo from "/src/assets/logo.png"
import { FaHome, FaUsers, FaUserTie, FaHotel, FaHospitalUser, FaCogs } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


function Aside() {

    return (
        <div>
            <Containner>

                <div class="sidebar">
                    <img src={Logo} alt="" />
                    <div class="combo">
                        <NavLink to="/" end id='inicial'> <FaHome /> Inicial</NavLink>
                        <NavLink to="/clientes" id='clientes'><FaUsers />  Clientes</NavLink>
                        <NavLink to="/proprietarios" id='proprietarios'><FaUserTie />  Proprietarios</NavLink>
                        <NavLink to="/imoveis" id='imoveis'><FaHotel />    Imoveis</NavLink>
                        <NavLink to="/corretores" id='corretores'><FaHospitalUser />  Corretores</NavLink>
                        <br /><br /><br />
                        <a href="/config" id='config'><FaCogs />       Configurações</a>
                    </div>
                </div>

            </Containner>

        </div>
    )
}

export default Aside
