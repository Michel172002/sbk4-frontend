import { Containner } from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";
import { useEffect, useState } from "react";
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

const ShortPropriedadesEdit = ({ corretorProp }) => {
  const [corretor, setCorretor] = useState([]);
  const [nome, setNome] = useState("");
  const [telefone, setTel] = useState("");
  const [creci, setCreci] = useState("");

  const getCorretor = async (corretorId) => {
    const loader = toast.loading("Carregando informações...");
    try {
      const response = await sbk4Fetch.get(`/corretor/${corretorId}`);
      const data = response.data;
      setCorretor(data);
      setNome(data.nome);
      setCreci(data.creci);
      setTel(data.telefone);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    toast.dismiss(loader);
  };

  const editCorretor = async (e) => {
    e.preventDefault();

    const loaderToast = toast.loading("Editando...");

    const corretorEditado = { nome, telefone, creci, ativo: true };
    try {
      await sbk4Fetch.put(`/corretor/${corretorProp.id}`, corretorEditado);
      toast.dismiss(loaderToast)
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    location.reload();
  };

  useEffect(() => {
    if (corretorProp) {
      getCorretor(corretorProp.id);
    }
  }, [corretorProp]);

  return (
    <MDBContainer>
      <form onSubmit={editCorretor}>
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
              label='Creci'
              type='number'
              value={creci}
              onChange={(e) => setCreci(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id='form3Example2'
              label='Telefone'
              type='number'
              value={telefone}
              onChange={(e) => setTel(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBBtn color='success' type='submit' size="lg" block>
          Editar
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};
export default ShortPropriedadesEdit;
