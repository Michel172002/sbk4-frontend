import React, { useEffect, useState, useRef } from "react";
import sbk4Fetch from "../../../../axios/config.js";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

function ShortPropriedades() {
  const [idProp, setIdProp] = useState("");
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

  const [proprietarios, setProprietarios] = useState([]);
  const [showProprietariosList, setShowProprietariosList] = useState(false);
  const [inputProprietario, setInputProprietario] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const createImovel = async (e) => {
    e.preventDefault();

    const loaderToast = toast.loading("Cadastrando...");

    const imovel = {
      idProp,
      tipo,
      preco,
      alugando,
      financia,
      area,
      rua,
      bairro,
      cidade,
      numero,
      complemento,
      estado,
      cep,
      comodos,
      descricao,
    };

    try {
      await sbk4Fetch.post("/imovel", imovel);
      toast.dismiss(loaderToast);
    } catch (error) {
      console.log(error);
      toast.dismiss(loaderToast)
      toast.error(error.message);
    }
    // location.reload();
  };

  const getProprietarios = async () => {
    const res = await sbk4Fetch.get('/proprietario')
    const data = res.data.content
    setProprietarios(data);
  }

  useEffect(() => {
    getProprietarios();
  }, [])

  const handleSearchProprietario = (e) => {
    const input = e.target.value
    setInputProprietario(input)

    const results = proprietarios.filter((prop) => {
      return prop.nome.toLowerCase().includes(input.toLowerCase());
    })

    setSearchResults(results);
    setShowProprietariosList(true);
  }

  const selectProprietario = (e) => {
    const selected = e.target.value;
    console.log(selected);
    setIdProp(selected);
    setShowProprietariosList(false);
  };

  const AbsoluteDiv = styled.div`
  position: absolute;
  z-index: 1;
`;

  return (
    <MDBContainer>
      <form onSubmit={createImovel}>
        <MDBRow className='mb-4 mt-4'>
          <MDBCol sm={6}>
            <MDBInput
              id="proprietarioSearchInput"
              label="Search Proprietario"
              type="text"
              value={inputProprietario}
              onChange={handleSearchProprietario}
            />
            {showProprietariosList && (
              <AbsoluteDiv> {/* Use the styled component here */}
                <MDBListGroup style={{ minWidth: '34.23rem' }} light small>
                  {searchResults.map((proprietario) => (
                    <MDBListGroupItem
                      key={proprietario.id}
                      value={proprietario.id}
                      tag='button'
                      action
                      type='button'
                      className='px-3 border'
                      onClick={selectProprietario}
                    >
                      {proprietario.nome} | {proprietario.identificacao}: {proprietario.identificacaoNumero}
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>
              </AbsoluteDiv>
            )}
          </MDBCol>
        </MDBRow>
        <MDBRow className='mb-4 mt-4'>
          <MDBCol>
            <MDBInput
              id='form3Example1'
              label='Rua'
              type='text'
              onChange={(e) => setRua(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id='form3Example2'
              label='Número'
              type='text'
              onChange={(e) => setNumero(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm={2}>
            <MDBInput
              className='mb-4'
              type='text'
              label='Bairro'
              onChange={(e) => setBairro(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={4}>
            <MDBInput
              className='mb-4'
              type='text'
              label='Cidade'
              onChange={(e) => setCidade(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={2}>
            <MDBInput
              className='mb-4'
              type='text'
              label='Estado'
              onChange={(e) => setEstado(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={4}>
            <MDBInput
              className='mb-4'
              type='text'
              label='CEP'
              onChange={(e) => setCep(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm={4}>
            <MDBInput
              className='mb-4'
              label='Complemento'
              type='text'
              onChange={(e) => setComplemento(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={4}>
            <MDBInput
              className='mb-4'
              label='Área'
              type='text'
              onChange={(e) => setArea(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={4}>
            <MDBInput
              className='mb-4'
              label='Descrição'
              type='text'
              onChange={(e) => setDescricao(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm={4}>
            <MDBInput
              className='mb-4'
              type='number'
              label='Preço'
              onChange={(e) => setPreco(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={4}>
            <Form.Select className="mb-4" onChange={(e) => setTipo(e.target.value)}>
              <option>Tipo</option>
              <option value={"CASA"}>Casa</option>
              <option value={"APARTAMENTO"}>Apartamento</option>
              <option value={"LOTE"}>Lote</option>
              <option value={"SALA COMERCIAL"}>Sala Comercial</option>
              <option value={"KIT NET"}>Kit Net</option>
              <option value={"CHACARA"}>Chácara</option>
              <option value={"TERRENO"}>Terreno</option>
            </Form.Select>
          </MDBCol>
          <MDBCol sm={4}>
            <Form.Check
              type="checkbox"
              label="Financia"
              onChange={() => setFinancia(!financia)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm={6}>
            <Form.Check
              type="radio"
              label="Alugar"
              name="alugarRadio"
              checked={alugando}
              onChange={() => setAlugando(true)}
            />
          </MDBCol>
          <MDBCol sm={6}>
            <Form.Check
              type="radio"
              label="Vender"
              name="alugarRadio"
              checked={!alugando}
              onChange={() => setAlugando(false)}
            />
          </MDBCol>
        </MDBRow>
        <MDBBtn color='success' type='submit' size="lg" block>
          Cadastrar
        </MDBBtn>
      </form>
    </MDBContainer>
  );
}

export default ShortPropriedades;
