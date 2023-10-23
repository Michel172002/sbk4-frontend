import { Containner } from "./styled.js";
import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import Aside from "../../components/aside/index.jsx";
import Navbar from "../../components/navbar/index.jsx";
import Header from "../../components/header/index.jsx";
import Table from "../../components/proprietariosComponents/table/index.jsx";
import HeaderModal from "../../components/proprietariosComponents/modal/header/index.jsx";
import ShortPropriedades from "../../components/proprietariosComponents/modal/shortPropriedades/index.jsx";
import FormPesquisar from "../../components/proprietariosComponents/formPesquisar/index.jsx";
import HeaderModalEdit from "../../components/proprietariosComponents/modalEdit/header/index.jsx";
import ShortPropriedadesEdit from "../../components/proprietariosComponents/modalEdit/shortPropriedades/index.jsx";
import HeaderModalDados from "../../components/proprietariosComponents/modalDados/header/index.jsx";
import ShortPropriedadesDados from "../../components/proprietariosComponents/modalDados/shortPropriedades/index.jsx";
import sbk4Fetch from "../../axios/config.js";

ReactModal.setAppElement("#root");

function Proprietarios() {
  const [modalCreateIsOpen, setIsOpenCreate] = useState(false);
  const [modalEditIsOpen, setIsOpenEdit] = useState(false);
  const [modalDadosIsOpen, setIsOpenDados] = useState(false);
  const [proprietarioSelecionado, setProprietarioSelecionado] = useState(null);
  const [proprietarios, setProprietarios] = useState([]);

  // Proprietarios
  const getProprietarios = async () => {
    try {
      const response = await sbk4Fetch.get("/proprietario");
      console.log(response)

      const data = response.data;

      setProprietarios(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProprietarios();
  }, []);


  // Modais
  const handleOpenModalCreate = () => {
    return setIsOpenCreate(true);
  };

  const handleCloseModalCreate = () => {
    return setIsOpenCreate(false);
  };

  const handleOpenModalEdit = (proprietario) => {
    setProprietarioSelecionado(proprietario);
    setIsOpenEdit(true);
  };

  const handleCloseModalEdit = () => {
    return setIsOpenEdit(false);
  };

  const handleOpenModalDados = (proprietario) => {
    setProprietarioSelecionado(proprietario);
    setIsOpenDados(true);
  };

  const handleCloseModalDados = () => {
    return setIsOpenDados(false);
  };

  // Formatar o formulario de criação
  // Formatar o formulário de edição
  // Formatar o modal de exibir dados
  return (
    <div>
      <Containner>
        <Navbar />
        <Aside />
        <br />
        <Header />
        <br />\
        <Table
          handleOpenModalEdit={handleOpenModalEdit}
          handleOpenModalDados={handleOpenModalDados}
          proprietarios={proprietarios}
          handleOpenModal={handleOpenModalCreate}
        />


        <ReactModal
          isOpen={modalCreateIsOpen}
          onRequestClose={handleOpenModalCreate}
          style={{
            content: {
              padding: "0px",
            },
          }}
        >
          <Containner>
            <HeaderModal handleCloseModalCreate={handleCloseModalCreate} />
            <br />
            <ShortPropriedades />
          </Containner>
        </ReactModal>

        <ReactModal
          isOpen={modalEditIsOpen}
          onRequestClose={handleCloseModalEdit}
          style={{
            content: {
              padding: "0px",
            },
          }}
        >
          <Containner>
            <HeaderModalEdit handleCloseModalEdit={handleCloseModalEdit} />
            <br />
            <ShortPropriedadesEdit proprietarioProp={proprietarioSelecionado} />
          </Containner>
        </ReactModal>

        <ReactModal
          isOpen={modalDadosIsOpen}
          onRequestClose={handleCloseModalDados}
          style={{
            content: {
              padding: "0px",
            },
          }}
        >
          <Containner>
            <HeaderModalDados handleCloseModalDados={handleCloseModalDados} />
            <br />
            <ShortPropriedadesDados
              proprietarioProp={proprietarioSelecionado}
            />
          </Containner>
        </ReactModal>

      </Containner>
    </div>
  );
}

export default Proprietarios;
