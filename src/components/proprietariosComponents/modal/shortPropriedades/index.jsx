import { useState } from "react";
import { Containner } from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShortPropriedades() {
  const [nome, setNome] = useState();
  const [nascimento, setDataNas] = useState();
  const [sexo, setSexo] = useState(true);
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [identificacao, setTipoDoc] = useState(1);
  const [identificacaoNumero, setNumDoc] = useState();
  const [observacao, setObservacao] = useState();

  const createProprietario = async (e) => {
    e.preventDefault();

    const loaderToast = toast.loading("Cadastrando...");

    const proprietario = {
      nome,
      nascimento,
      sexo,
      telefone,
      email,
      identificacao,
      identificacaoNumero,
      observacao,
    };

    try {
      await sbk4Fetch.post("/proprietario", proprietario);
      toast.dismiss(loaderToast);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    location.reload();
  };

  return (
    <MDBContainer>
    <form onSubmit={createProprietario}>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput
            id='form3Example1'
            label='Nome'
            type='text'
            onChange={(e) => setNome(e.target.value)}
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id='form3Example2'
            label='Data de Nascimento'
            type='date'
            onChange={(e) => setDataNas(e.target.value)}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol sm={2}>
          <MDBInput
            className='mb-4'
            type='number'
            label='Telefone'
            onChange={(e) => setTelefone(e.target.value)}
          />
        </MDBCol>
        <MDBCol sm={4}>
          <MDBInput
            className='mb-4'
            type='email'
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </MDBCol>
        <MDBCol sm={2}>
          <Form.Select className="mb-4" onChange={(e) => setTipoDoc(e.target.value)}>
            <option>Tipo Doc.</option>
            <option value={'RG'}>RG</option>
            <option value={'CPF'}>CPF</option>
            <option value={'CNPJ'}>CNPJ</option>
          </Form.Select>
        </MDBCol>
        <MDBCol sm={4}>
          <MDBInput
            className='mb-4'
            type='number'
            label='Número Doc.'
            onChange={(e) => setNumDoc(e.target.value)}
          />
        </MDBCol>
      </MDBRow>
      <MDBInput
        className='mb-4'
        label='Observações'
        type='text'
        onChange={(e) => setObservacao(e.target.value)}
      />
      <MDBBtn color='success' type='submit' size="lg" block>
        Cadastrar
      </MDBBtn>
    </form>
  </MDBContainer>
  );
}
export default ShortPropriedades;
