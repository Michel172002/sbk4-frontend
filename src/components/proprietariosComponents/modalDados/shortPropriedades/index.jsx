import { useEffect, useState } from "react";
import { Containner } from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";
import styled from "styled-components";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formatPhoneNumber from '../../../../utils/formatPhoneNumber.js'


const StyledCard = styled(MDBCard)`
    max-width: 600px;
    margin: 0 auto;
    padding: 1.5rem;
    // text-align: center;
    border-radius: 0.25rem;

    .title {
      border-bottom: 1px solid #000;
      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    }
    .title>p{
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
    }

    button {
      background: transparent;
    color: black;
    border: 1.75px solid lightgray;
    border-radius: 12.5%;
    filter: opacity(66%);
    transition: 0.3s;
    }

    button:hover {
      filter: opacity(100%);
    }

  `;

function ShortPropriedadesDados({ proprietarioProp }) {
  const [proprietario, setProprietario] = useState([]);
  const [nome, setNome] = useState("");
  const [data_nas, setDataNas] = useState("");
  const [sexo, setSexo] = useState(true);
  const [n_tel, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [identificacao, setTipoDoc] = useState(1);
  const [identificacaoNumero, setNumDoc] = useState("");
  const [obs, setObs] = useState("");

  const getProprietario = async (proprietarioId) => {
    const loader = toast.loading("Carregando informações...");
    try {
      const response = await sbk4Fetch.get(`/proprietario/${proprietarioId}`);
      const data = response.data;
      setProprietario(data);
      setNome(data.nome);
      setDataNas(data.nascimento);
      setSexo(data.sexo);
      setTelefone(data.telefone);
      setEmail(data.email);
      setTipoDoc(data.identificacao);
      setNumDoc(data.identificacaoNumero);
      setObs(data.observacao);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    toast.dismiss(loader);
  };

  const getSexo = (sexo) => {
    if (sexo) {
      return <label class="form-control">Homem</label>;
    } else {
      return <label class="form-control">Mulher</label>;
    }
  };

  const getTipoDoc = (identificacao) => {
    if (identificacao === "RG") {
      return <label>RG:</label>;
    }
    if (identificacao === "CPF") {
      return <label>CPF:</label>;
    }
    if (identificacao === "CNPJ") {
      return <label>CNPJ:</label>;
    }
  };

  useEffect(() => {
    if (proprietarioProp) {
      getProprietario(proprietarioProp.id);
    }
  }, [proprietarioProp]);


  return (
    <MDBContainer>
      <StyledCard className="shadow">
        <MDBCardBody>
          <MDBCardTitle>
            <div className="title mb-3">
              <p>{nome}</p>
            </div>
          </MDBCardTitle>
          <MDBCardText>

            <MDBRow>
              <MDBCol sm={3}>
                <p>Data Nasc.:</p>
              </MDBCol>
              <MDBCol>
                <strong>{new Date(data_nas).toLocaleDateString('pt-BR')}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={3}>
                <p>Telefone:</p>
              </MDBCol>
              <MDBCol>
                <strong>{formatPhoneNumber(n_tel)}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={3}>
                <p>Email:</p>
              </MDBCol>
              <MDBCol>
                <strong>{email}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={3}>
                <p>{getTipoDoc(identificacao)}</p>
              </MDBCol>
              <MDBCol>
                <strong>{identificacaoNumero}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={3}>
                <p>Observações:</p>
              </MDBCol>
              <MDBCol>
                <small><strong>{obs}</strong></small>
              </MDBCol>
            </MDBRow>
          </MDBCardText>
        </MDBCardBody>
      </StyledCard>
    </MDBContainer>
  );
}
export default ShortPropriedadesDados;
