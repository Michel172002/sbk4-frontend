import sbk4Fetch from "../../../../axios/config.js";
import { Containner } from "./styled.js";
import { useState } from "react";
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

const ShortPropriedades = () => {
  const [nome, setName] = useState();
  const [telefone, setTel] = useState();
  const [creci, setCreci] = useState();

  const createCorretor = async (e) => {
    e.preventDefault();

    const loaderToast = toast.loading("Cadastrando...");

    const corretor = { nome, telefone, creci, ativo: true };

    try {
      await sbk4Fetch.post("/corretor", corretor);
      toast.dismiss(loaderToast);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    location.reload();
  };

  return (
    <MDBContainer>
      <form onSubmit={createCorretor}>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput
              id='form3Example1'
              label='Nome'
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id='form3Example2'
              label='Creci'
              type='number'
              onChange={(e) => setCreci(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
          <MDBInput
              id='form3Example2'
              label='Telefone'
              type='text'
              onChange={(e) => setTel(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBBtn color='success' type='submit' size="lg" block>
          Cadastrar
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};
export default ShortPropriedades;
