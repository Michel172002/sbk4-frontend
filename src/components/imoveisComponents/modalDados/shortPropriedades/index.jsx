import { useState } from "react";
import { Containner } from "./styled.js";
import { useEffect } from "react";
import sbk4Fetch from "../../../../axios/config.js";
import formatCurrency from "../../../../utils/formatCurrency.js";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formatPhoneNumber from '../../../../utils/formatPhoneNumber.js'
import styled from "styled-components";
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

const StyledCard = styled(MDBCard)`
    max-width: 960px;
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

function ShortPropriedadesDados({ imovelProp }) {
  const [proprietario, setProprietario] = useState({});
  const [tipo, setTipo] = useState("CASA");
  const [preco, setPreco] = useState("");
  const [alugando, setAlugando] = useState(false);
  const [financia, setFinancia] = useState(false);
  const [area, setArea] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [comodos, setComodos] = useState("");
  const [descricao, setDescricao] = useState("");
  const [idMovel, setIdImovel] = useState("");


  const getProprietario = async (id) => {
    try {
      const response = await sbk4Fetch.get(`/proprietario/${id}`);
      const data = response.data;
      console.log('proprietario', data)
      data.telefone = formatPhoneNumber(data.telefone);
      setProprietario(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getImovel = async (imovelId) => {
    const loader = toast.loading("Carregando informações...");

    try {
      const response = await sbk4Fetch.get(`/imovel/${imovelId}`);
      const data = response.data;
      getProprietario(data.proprietario.id);
      setIdImovel(data.id);
      setTipo(data.tipo);
      setPreco(data.preco);
      setAlugando(data.alugando);
      setFinancia(data.financia);
      setArea(data.area);
      setRua(data.rua);
      setBairro(data.bairro);
      setCidade(data.cidade);
      setNumero(data.numero);
      setComplemento(data.complemento);
      setEstado(data.estado);
      setCep(data.cep);
      setComodos(data.comodos);
      setDescricao(data.descricao);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    toast.dismiss(loader);
  };

  const getTipo = (tipo) => {
    if (tipo === "APARTAMENTO") {
      return <strong>APARTAMENTO</strong>;
    }
    if (tipo === "LOTE") {
      return <strong>LOTE</strong>;
    }
    if (tipo === "SALA COMERCIAL") {
      return <strong>SALA COMERCIAL</strong>;
    }
    if (tipo === "KIT NET") {
      return <strong>KIT NET</strong>;
    }
    if (tipo === "CHACARA") {
      return <strong>CHACARA</strong>;
    }
    if (tipo === "TERRENO") {
      return <strong>TERRENO</strong>;
    }
  };

  const getFinancia = (financia) => {
    if (financia) {
      return <strong>Financiável</strong>;
    } else {
      return <strong>Não Financiável</strong>;
    }
  };

  const getAlugando = (alugando) => {
    if (alugando) {
      return <strong>Aluguel</strong>;
    } else {
      return <strong>Venda</strong>;
    }
  };

  useEffect(() => {
    if (imovelProp) {
      getImovel(imovelProp.id);
    }
  }, []);

  return (
    <MDBContainer>
      <StyledCard className="shadow">
        <MDBCardBody>
          <MDBCardTitle>
            <div className="title mb-3">
              <p className="mb-5">Imóvel #{idMovel}</p>

              <div className="fs-6">
                <MDBRow>
                  <MDBCol sm={4}>
                    <p>Proprietário: {proprietario && <strong>{proprietario.nome}</strong>}</p>
                  </MDBCol>
                  <MDBCol sm={4}>
                    <p><HiOutlinePhone /> {proprietario && <strong>{proprietario.telefone}</strong>}</p>
                  </MDBCol>
                  <MDBCol sm={4}>
                    <p><HiOutlineMail />  {proprietario && <strong>{proprietario.email}</strong>}</p>
                  </MDBCol>
                </MDBRow>

              </div>
            </div>
          </MDBCardTitle>
          <MDBCardText>

            <MDBRow>
              <MDBCol sm={2}>
                <p>Tipo:</p>
              </MDBCol>
              <MDBCol>
                {getTipo(tipo)}
              </MDBCol>

              <MDBCol sm={2}>
                <p>Rua:</p>
              </MDBCol>
              <MDBCol>
                <strong>{rua}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={2}>
                <p>Comodos:</p>
              </MDBCol>
              <MDBCol>
                <strong>{comodos}</strong>
              </MDBCol>

              <MDBCol sm={2}>
                <p>Número:</p>
              </MDBCol>
              <MDBCol>
                <strong>{numero}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={2}>
                <p>Area:</p>
              </MDBCol>
              <MDBCol>
                <strong>{area} m²</strong>
              </MDBCol>

              <MDBCol sm={2}>
                <p>Bairro:</p>
              </MDBCol>
              <MDBCol>
                <strong>{bairro}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={2}>
                <p>Preço:</p>
              </MDBCol>
              <MDBCol>
                <strong>{formatCurrency(parseFloat(preco))}</strong>
              </MDBCol>

              <MDBCol sm={2}>
                <p>Complemento:</p>
              </MDBCol>
              <MDBCol>
                <strong>{complemento}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={2}>
                <p>Disp. para:</p>
              </MDBCol>
              <MDBCol>
                {getAlugando(alugando)}
              </MDBCol>

              <MDBCol sm={2}>
                <p>Cidade:</p>
              </MDBCol>
              <MDBCol>
                <strong>{cidade}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={2}>
                <p>Financiamento</p>
              </MDBCol>
              <MDBCol>
                {getFinancia(financia)}
              </MDBCol>

              <MDBCol sm={2}>
                <p>Estado:</p>
              </MDBCol>
              <MDBCol>
                <strong>{estado}</strong>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm={2}>
                <p>Descrição:</p>
              </MDBCol>
              <MDBCol>
                <small><strong>{descricao}</strong></small>
              </MDBCol>

              <MDBCol sm={2}>
                <p>CEP:</p>
              </MDBCol>
              <MDBCol>
                <strong>{cep}</strong>
              </MDBCol>
            </MDBRow>
          </MDBCardText>
        </MDBCardBody>
      </StyledCard>
    </MDBContainer>
  );
}
export default ShortPropriedadesDados;
