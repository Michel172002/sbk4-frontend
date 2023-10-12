import Logo from "/src/assets/logo.png"
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import styled from "styled-components";
import { BsFillHouseDoorFill, BsFillBuildingsFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa';
import { GoPasskeyFill } from 'react-icons/go'
import { FaIdBadge } from 'react-icons/fa6'

const StyledNav = styled(Nav)`
  background: linear-gradient(45deg, #0F1A2C, #1E2F46);
  width: 300px;
  padding: 0;
  position: fixed;
  // height: calc(100vh - 1rem);
  height: 100vh;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 5px solid transparent;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  color: #CACACA;
  text-decoration: none;
  font-size: 1.1rem;
  text-align: start;

  &.active {
    // background-color: rgba(302, 302, 302, 0.1);
    color: white;
    font-weight: bold;
    border-bottom: 2px solid #CACACA;
    border-radius: 0px;
  }

  &:hover:not(.active) {
    background-color: rgba(302, 302, 302, 0.1);
    // color: #0F1A2C;
    color: white;
  }
`;

function Aside() {

  return (
    <StyledNav defaultActiveKey="/home" className="flex-column shadow">
      <div className="m-3 p-3 mb-4">
        <img src={Logo} alt="Logo" className="img-fluid" />
      </div>
      <StyledNavLink className={'px-2 py-1 rounded mx-2 my-1'} to={'/'}>
        <BsFillHouseDoorFill className="mx-3" /> Início
      </StyledNavLink>
      <StyledNavLink className={'px-2 py-1 rounded mx-2 my-1'} to={'/clientes'}>
        <FaUsers className="mx-3" /> Clientes
      </StyledNavLink>
      <StyledNavLink className={'px-2 py-1 rounded mx-2 my-1'} to={'/imoveis'}>
        <BsFillBuildingsFill className="mx-3" /> Imóveis
      </StyledNavLink>
      <StyledNavLink className={'px-2 py-1 rounded mx-2 my-1'} to={'/proprietarios'}>
        <GoPasskeyFill className="mx-3" /> Proprietários
      </StyledNavLink>
      <StyledNavLink className={'px-2 py-1 rounded mx-2 my-1'} to={'/corretores'}>
        <FaIdBadge className="mx-3" /> Corretores
      </StyledNavLink>
    </StyledNav>
  )
}

export default Aside
