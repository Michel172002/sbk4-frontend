import Grid from "./grid/index.jsx"
import { Containner } from "./styled.js"
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardFooter,
  MDBBadge
} from 'mdb-react-ui-kit';
import { BsFillBuildingsFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import styled from "styled-components";
import { useState, useEffect } from "react";
import sbk4Fetch from '../../../axios/config.js';
import { Spinner } from "react-bootstrap";
import formatPhoneNumber from '../../../utils/formatPhoneNumber.js';
import { useNavigate } from "react-router-dom";


const StyledImoveisIcon = styled(BsFillBuildingsFill)`
  font-size: 1rem;
  border-radius: 100%;
  padding: 12px;
  background: #CACACA;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px; /* Adjust the width and height to your preference */
  height: 42px;
`;

const StyledClientesIcon = styled(FaUsers)`
  font-size: 2rem;
  border-radius: 100%;
  padding: 12px;
  background: #CACACA;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px; /* Adjust the width and height to your preference */
  height: 42px;
`;

const StyledBtn = styled(MDBBtn)`
  background: linear-gradient(45deg, #0F1A2C, #1E2F46);
  color: #CACACA;
  border: none;

  &:hover {
    background: linear-gradient(45deg, #0F1A2C, #1E2F46);
    color: white;
  }

  &:active {
    background: linear-gradient(45deg, #0F1A2C, #1E2F46);
    color: white;
  }
`;

function Grids() {
  const [imoveis, setImoveis] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imoveisRes = await sbk4Fetch.get('/imovel');
        const clientesRes = await sbk4Fetch.get('/cliente');

        const imoveisData = imoveisRes.data.content.slice(-5);
        const clientesData = clientesRes.data.content.slice(-5);

        setImoveis(imoveisData);
        setClientes(clientesData);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  })

  return (
    <Containner>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center m-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <MDBRow style={{ maxWidth: '85vw' }} className="mx-auto">
          <MDBCol>
            <MDBCard style={{ maxWidth: '650px', background: 'linear-gradient(45deg, #0F1A2C, #1E2F46)' }} className="shadow text-white">
              <MDBCardTitle className="d-flex justify-content-center align-items-center">
                <p className="fs-5 mx-5 mt-3">Imóveis Recentes</p>
                <StyledImoveisIcon className="mx-5 fs-3" />
              </MDBCardTitle>
            </MDBCard>

            <MDBCard
              className="mt-2 shadow"
              style={{ maxWidth: '650px' }}
            >
              <MDBListGroup
                style={{ minWidth: '22rem' }}
                light
                className="p-3"
              >
                {imoveis.reverse().map((imovel) => (
                  <MDBListGroupItem
                    className='d-flex justify-content-between align-items-center'
                    key={imovel.id}
                  >
                    <div>
                      <div className='fw-bold'>{imovel.tipo} para ALUGUEL</div>
                      <div className='text-muted'>{imovel.bairro} - {imovel.cidade}</div>
                    </div>
                  </MDBListGroupItem>
                ))}
              </MDBListGroup>
              <MDBCardFooter className="text-center">
                <div className="d-grid gap-2 px-5 mb-3">
                  <StyledBtn onClick={() => navigate('/imoveis')}>Ver Todos</StyledBtn>
                </div>
              </MDBCardFooter>
            </MDBCard>

          </MDBCol>

          <MDBCol>
            <MDBCard style={{ maxWidth: '650px', background: 'linear-gradient(45deg, #0F1A2C, #1E2F46)' }} className="shadow text-white">
              <MDBCardTitle className="d-flex justify-content-center align-items-center">
                <p className="text-center fs-5 mx-5 mt-3">Clientes Recentes</p>
                <StyledClientesIcon className="mx-5 fs-3" />
              </MDBCardTitle>
            </MDBCard>

            <MDBCard
              className="mt-2 shadow"
              style={{ maxWidth: '650px' }}
            >
              <MDBListGroup
                style={{ minWidth: '22rem' }}
                light
                className="p-3"
              >
                {clientes.reverse().map((cliente) => (
                  <MDBListGroupItem
                    className='d-flex justify-content-between align-items-center'
                    key={cliente.id}
                  >
                    <div>
                      <div className='fw-bold'>{cliente.nome}</div>
                      <div className='text-muted'>{formatPhoneNumber(cliente.telefone)} | {cliente.email}</div>
                    </div>
                  </MDBListGroupItem>
                ))}
              </MDBListGroup>
              <MDBCardFooter className="text-center">
                <div className="d-grid gap-2 px-5 mb-3">
                  <StyledBtn onClick={() => navigate('/clientes')}>Ver Todos</StyledBtn>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      )}
    </Containner>
  )
}
export default Grids

