import { useState } from "react";
import sbk4Fetch from '../../../../axios/config';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShortPropriedades = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [cargo, setCargo] = useState("");

  const createUsuario = async (e) => {
    e.preventDefault();

    const loaderToast = toast.loading("Cadastrando...");

    const usuario = {
      nome: nome,
      senha: senha,
      cargo: cargo
    };

    try {
      const res = await sbk4Fetch.post("/user", usuario);
      console.log(res)
      toast.dismiss(loaderToast);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    // location.reload();
  };

  return (
    <MDBContainer>
      <form onSubmit={createUsuario}>
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
              label='senha'
              type='password'
              onChange={(e) => setSenha(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
          <MDBInput
              id='form3Example2'
              label='Cargo'
              type='text'
              onChange={(e) => setCargo(e.target.value)}
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
