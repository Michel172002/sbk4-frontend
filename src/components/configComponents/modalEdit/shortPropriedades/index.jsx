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

const ShortPropriedadesEdit = ({ userProp }) => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [cargo, setCargo] = useState("");


  const getUser = async (userId) => {
    const loader = toast.loading("Carregando informações...");
    try {
      const response = await sbk4Fetch.get(`/user/${userId}`);
      const data = response.data;
      setNome(data.nome);
      setSenha(data.senha);
      setCargo(data.cargo);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    toast.dismiss(loader);
  };

  const editUser = async (e) => {
    e.preventDefault();

    const loaderToast = toast.loading("Editando...");

    const userEditado = {
      nome,
      senha,
      cargo
    };
    try {
      await sbk4Fetch.put(`/user/${userProp.id}`, userEditado);
      toast.dismiss(loaderToast)
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    location.reload();
  };

  useEffect(() => {
    if (userProp) {
      getUser(userProp.id);
    }
  }, [userProp]);

  return (
<MDBContainer>
      <form onSubmit={editUser}>
      <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput
              id='form3Example1'
              label='Nome'
              type='text'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id='form3Example2'
              label='senha'
              type='password'
              // value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
          <MDBInput
              id='form3Example2'
              label='Cargo'
              type='text'
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBBtn color='success' type='submit' size="lg" block>
          Editar
        </MDBBtn>
      </form>
    </MDBContainer>
    // </Containner>
  );
};
export default ShortPropriedadesEdit;
