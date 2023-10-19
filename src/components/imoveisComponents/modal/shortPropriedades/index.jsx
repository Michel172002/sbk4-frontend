import React, { useEffect, useState } from "react";
import sbk4Fetch from "../../../../axios/config.js";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import formatCurrency from "../../../../utils/formatCurrency.js";

const AbsoluteDiv = styled.div`
  position: absolute;
  z-index: 1;
`;


function ShortPropriedades() {
  const [idProp, setIdProp] = useState("");
  const [tipo, setTipo] = useState("");
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
  const [proprietarioSelecionado, setProprietarioSelecionado] = useState("");

  const createImovel = async (e) => {
    e.preventDefault();

    const loaderToast = toast.loading("Cadastrando...");

    const imovel = {
      idProp: idProp,
      tipo: tipo,
      preco: preco,
      alugando: alugando,
      financia: financia,
      area: area.toString(),
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      numero: numero.toString(),
      complemento: complemento,
      estado: estado,
      cep: cep,
      comodos: comodos.toString(),
      descricao: descricao,
    };

    console.log(imovel)

    try {
      const res = await sbk4Fetch.post("/imovel", imovel);
      console.log('res: ', res)
      toast.dismiss(loaderToast);
    } catch (error) {
      console.log(error);
      toast.dismiss(loaderToast)
      toast.error(error.message);
    }
    location.reload();
  };

  const getProprietarios = async () => {
    const res = await sbk4Fetch.get('/proprietario')
    const data = res.data.content
    setProprietarios(data);
  }

  const handleSearchProprietario = (e) => {
    const input = e.target.value
    setInputProprietario(input)

    const results = proprietarios.filter((prop) => {
      return prop.nome.toLowerCase().includes(input.toLowerCase());
    })

    setSearchResults(results);
    setShowProprietariosList(true);
  }

  const selectProprietario = (e, proprietario) => {
    const selected = e.target.value;

    setProprietarioSelecionado(`${proprietario.nome} | ${proprietario.identificacao}: ${proprietario.identificacaoNumero}`)
    setIdProp(selected);
    setShowProprietariosList(false);
    setInputProprietario("");
  };

  window.addEventListener("click", function (event) {
    if (showProprietariosList) {
      setShowProprietariosList(false);
      setInputProprietario("");
    }
  })

  useEffect(() => {
    getProprietarios();
  }, [])

  return (
    <MDBContainer>
      <form onSubmit={createImovel}>
        <MDBRow className='mb-4'>
          <MDBCol sm={6}>
            <MDBInput
              id="proprietarioSearchInput"
              label="Procurar Proprietário"
              type="text"
              value={inputProprietario}
              onChange={handleSearchProprietario}
            />
            {showProprietariosList && (
              <AbsoluteDiv>
                <MDBListGroup style={{ minWidth: '34.23rem' }} light small>
                  {searchResults.map((proprietario) => (
                    <MDBListGroupItem
                      key={proprietario.id}
                      value={proprietario.id}
                      tag='button'
                      action
                      type='button'
                      className='px-3 border'
                      onClick={(e) => selectProprietario(e, proprietario)}
                    >
                      {proprietario.nome} | {proprietario.identificacao}: {proprietario.identificacaoNumero}
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>
              </AbsoluteDiv>
            )}
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="proprietarioSelecionado"
              label="Proprietário Selecionado"
              type="text"
              value={proprietarioSelecionado}
              disabled
              required
            />
          </MDBCol>
        </MDBRow>

        <hr />

        <MDBRow className='mb-4 mt-4'>
          <MDBCol sm={5} className="mt-4">
            <MDBInput
              id='form3Example1'
              label='Rua'
              type='text'
              onChange={(e) => setRua(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={1} className="mt-4">
            <MDBInput
              id='form3Example2'
              label='Número'
              type='number'
              onChange={(e) => setNumero(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={4} className="mt-4">
            <MDBInput
              type='text'
              label='Bairro'
              onChange={(e) => setBairro(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={2} className="mt-4">
            <MDBInput
              label='Complemento'
              type='text'
              onChange={(e) => setComplemento(e.target.value)}
            />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol sm={5}>
            <MDBInput
              className='mb-4'
              type='text'
              label='Cidade'
              onChange={(e) => setCidade(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={1}>
            <MDBInput
              className='mb-4'
              type='text'
              label='Estado'
              maxLength={'2'}
              value={estado}
              onChange={(e) => setEstado(e.target.value.toUpperCase())}
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

        <hr />

        <MDBRow className="mt-4">
          <MDBCol sm={4}>
            <Form.Check
              type="radio"
              label="Alugar"
              name="alugarRadio"
              checked={alugando}
              onChange={() => setAlugando(true)}
            />
          </MDBCol>
          <MDBCol sm={4}>
            <Form.Check
              type="radio"
              label="Vender"
              name="alugarRadio"
              checked={!alugando}
              onChange={() => setAlugando(false)}
            />
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
          <MDBCol sm={3} className="mt-4">
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
          <MDBCol sm={3} className="mt-4">
            <MDBInput
              className='mb-4'
              type='number'
              label='Comodos'
              onChange={(e) => setComodos(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={3} className="mt-4">
            <MDBInput
              className='mb-4'
              label='Área (m²)'
              type='number'
              onChange={(e) => setArea(e.target.value)}
            />
          </MDBCol>
          <MDBCol sm={3} className="mt-4">
            <MDBInput
              className='mb-4'
              type='number'
              label='Preço'
              onChange={(e) => setPreco(e.target.value)}
            />
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-4">
          <MDBCol sm={6}>
            <MDBInput
              className='mb-4'
              label='Descrição'
              type='text'
              onChange={(e) => setDescricao(e.target.value)}
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
