import React, { useEffect, useState, useRef } from "react";
import sbk4Fetch from "../../../../axios/config.js";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formatPhoneNumber from '../../../../utils/formatPhoneNumber.js'
import styled from "styled-components";


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

const ShortPropriedadesDados = ({ clienteProp }) => {
  const [nome, setNome] = useState("");
  const [dataNasm, setDataNasm] = useState("");
  const [sexo, setSexo] = useState(true);
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [identificacao, setTipoDoc] = useState("");
  const [identificacaoNumber, setNumDoc] = useState("");
  const [observacao, setobservacao] = useState("");
  const [procTipo, setProcTipo] = useState("");
  const [procAlugando, setAlugar] = useState("");
  const [procComodos, setComodos] = useState("");

  const getCliente = async (clienteId) => {
    const loader = toast.loading("Carregando informações...");
    try {
      const response = await sbk4Fetch.get(`/cliente/${clienteId}`);
      const data = response.data;
      setNome(data.nome);
      setDataNasm(data.dataNasm);
      setSexo(data.sexo);
      setTelefone(data.telefone);
      setEmail(data.email);
      setTipoDoc(data.identificacao);
      setNumDoc(data.identificacaoNumber);
      setobservacao(data.observacao);
      setProcTipo(data.procTipo);
      setAlugar(data.procAlugando);
      setComodos(data.procComodos);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    toast.dismiss(loader);
  };

  const getSexo = (sexo) => {
    return sexo ? "Homem" : "Mulher";
  };

  const getTipoDoc = (identificacao) => {
    switch (identificacao) {
      case "RG":
        return "RG:";
      case "CPF":
        return "CPF:";
      case "CNPJ":
        return "CNPJ:";
      default:
        return "Identificação:";
    }
  };

  const getTipoProc = (procAlugando) => {
    return procAlugando ? "Alugar" : "Comprar";
  };

  useEffect(() => {
    if (clienteProp) {
      getCliente(clienteProp.id);
    }
  }, [clienteProp]);

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
                <strong>{new Date(dataNasm).toLocaleDateString('pt-BR')}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={3}>
                <p>Telefone:</p>
              </MDBCol>
              <MDBCol>
                <strong>{formatPhoneNumber(telefone)}</strong>
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
                <strong>{identificacaoNumber}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={3}>
                <p>Procurando:</p>
              </MDBCol>
              <MDBCol>
                <strong>{procTipo}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={3}>
                <p>Comodos:</p>
              </MDBCol>
              <MDBCol>
                <strong>{procComodos}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={3}>
                <p>Tipo:</p>
              </MDBCol>
              <MDBCol>
                <strong>{getTipoProc(procAlugando)}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={3}>
                <p>Observações:</p>
              </MDBCol>
              <MDBCol>
                <small><strong>{observacao}</strong></small>
              </MDBCol>
            </MDBRow>
          </MDBCardText>
        </MDBCardBody>
      </StyledCard>
    </MDBContainer>
  );
};

export default ShortPropriedadesDados;
