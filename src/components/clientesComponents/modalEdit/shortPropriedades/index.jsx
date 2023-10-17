import { useEffect, useState } from "react";
// import { Containner } from "./styled.js";
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

const ShortPropriedadesEdit = ({ clienteProp }) => {
  const [nome, setNome] = useState("");
  const [dataNas, setDataNasm] = useState("");
  const [sexo, setSexo] = useState(true);
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [identificacao, setTipoDoc] = useState("");
  const [identificacaoNumber, setNumDoc] = useState("");
  const [observacao, setObservacao] = useState("");
  const [procTipo, setProcTipo] = useState("");
  const [procAlugando, setAlugar] = useState(true);
  const [procComodos, setComodos] = useState("");

  const getCliente = async (clienteId) => {
    const loader = toast.loading("Carregando informações...");
    try {
      const response = await sbk4Fetch.get(`/cliente/${clienteId}`);
      const data = response.data;
      setNome(data.nome);
      setDataNasm(data.dataNasm);
      setTelefone(data.telefone);
      setEmail(data.email);
      setTipoDoc(data.identificacao);
      setNumDoc(data.identificacaoNumber);
      setObservacao(data.observacao);
      setProcTipo(data.procTipo);
      setAlugar(data.procAlugando);
      setComodos(data.procComodos);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    toast.dismiss(loader);
  };

  const editCliente = async (e) => {
    e.preventDefault();

    const loaderToast = toast.loading("Editando...");

    const clienteEditado = {
      nome,
      dataNas,
      sexo,
      telefone,
      email,
      identificacao,
      identificacaoNumber,
      observacao,
      procTipo,
      procAlugando,
      procComodos,
      ativo: true,
    };
    try {
      await sbk4Fetch.put(`/cliente/${clienteProp.id}`, clienteEditado);
      toast.dismiss(loaderToast)
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    location.reload();
  };

  useEffect(() => {
    if (clienteProp) {
      getCliente(clienteProp.id);
    }
  }, [clienteProp]);

  return (
<MDBContainer>
      <form onSubmit={editCliente}>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput
              id='form3Example1'
              label='Nome'
              type='text'
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id='form3Example2'
              label='Data de Nascimento'
              type='date'
              onChange={(e) => setDataNas(e.target.value)}
              value={dataNas}
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
              value={telefone}
            />
          </MDBCol>
          <MDBCol sm={4}>
            <MDBInput
              className='mb-4'
              type='email'
              label='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </MDBCol>
          <MDBCol sm={2}>
            <Form.Select className="mb-4" value={identificacao} onChange={(e) => setTipoDoc(e.target.value)}>
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
              value={identificacaoNumber}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm={4}>
            <MDBInput
              className='mb-4'
              label='Procurando'
              type='text'
              onChange={(e) => setProcTipo(e.target.value)}
              value={procTipo}
            />
          </MDBCol>
          <MDBCol sm={2}>
            <MDBInput
              className='mb-4'
              label='Comodos'
              type='text'
              onChange={(e) => setComodos(e.target.value)}
              value={procComodos}
            />
          </MDBCol>
          <MDBCol sm={2}>
            <Form.Select className="mb-4" value={procAlugando} onChange={(e) => setAlugar(e.target.value)}>
              <option>Tipo</option>
              <option value={true}>Alugar</option>
              <option value={false}>Comprar</option>
            </Form.Select>
          </MDBCol>
        </MDBRow>
        <MDBInput
          className='mb-4'
          label='Observações'
          type='text'
          onChange={(e) => setObservacao(e.target.value)}
          value={observacao}
        />
        <MDBBtn color='success' type='submit' size="lg" block>
          Editar
        </MDBBtn>
      </form>
    </MDBContainer>
    // </Containner>
  );
};
export default ShortPropriedadesEdit;
