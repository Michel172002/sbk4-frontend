import { Containner } from "./styled.js";
import Aside from "../../components/aside/index.jsx";
import Navbar from "../../components/navbar/index.jsx";
import Header from "../../components/header/index.jsx";
import FormPesquisar from "../../components/corretoresComponents/formPesquisar";
import Table from "../../components/corretoresComponents/table";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import HeaderModal from "../../components/corretoresComponents/modal/header/index.jsx";
import ShortPropriedades from "../../components/corretoresComponents/modal/shortPropriedades/index.jsx";
import ShortPropriedadesEdit from "../../components/corretoresComponents/modalEdit/shortPropriedades/index.jsx";
import HeaderModalEdit from "../../components/corretoresComponents/modalEdit/header/index.jsx";
import sbk4Fetch from "../../axios/config.js";
import HeaderModalDados from "../../components/corretoresComponents/modalDados/header/index.jsx";
import ShortPropriedadesDados from "../../components/corretoresComponents/modalDados/shortPropriedades/index.jsx";

ReactModal.setAppElement("#root");

function Corretores() {
  const [modalCreateIsOpen, setIsOpenCreate] = useState(false);
  const [modalEditIsOpen, setIsOpenEdit] = useState(false);
  const [modalDadosIsOpen, setIsOpenDados] = useState(false);
  const [corretorSelecionado, setCorretorSelecionado] = useState(null);
  const [corretores, setCorretores] = useState([]);

  // Corretores
  const getCorretores = async () => {
    try {
      const response = await sbk4Fetch.get("/corretor");

      const data = response.data;

      setCorretores(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCorretores();
  }, []);

  //Modais
  const handleOpenModalCreate = () => {
    return setIsOpenCreate(true);
  };

  const handleCloseModalCreate = () => {
    return setIsOpenCreate(false);
  };

  const handleOpenModalEdit = (corretor) => {
    setCorretorSelecionado(corretor);
    setIsOpenEdit(true);
  };

  const handleCloseModalEdit = () => {
    return setIsOpenEdit(false);
  };

  const handleOpenModalDados = (corretor) => {
    setCorretorSelecionado(corretor);
    setIsOpenDados(true);
  };

  const handleCloseModalDados = () => {
    return setIsOpenDados(false);
  };

  return (
    <Containner>
      <Navbar />
      <Aside />
      <br />
      <Header />
      <br />
      <Table
        handleOpenModalEdit={handleOpenModalEdit}
        handleOpenModalDados={handleOpenModalDados}
        corretores={corretores}
        handleOpenModal={handleOpenModalCreate}
      />

      {/* Modais */}
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
          <ShortPropriedadesEdit corretorProp={corretorSelecionado} />
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
          <ShortPropriedadesDados corretorProp={corretorSelecionado} />
        </Containner>
      </ReactModal>
    </Containner>
  );
}
export default Corretores;
