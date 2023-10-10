import { Containner } from "./styled.js";
import Aside from "../../components/aside/index.jsx";
import Header from "../../components/header/index.jsx";
import Navbar from "../../components/navbar/index.jsx";
import FormPesquisar from "../../components/imoveisComponents/formPesquisar";
import Table from "../../components/imoveisComponents/table";
import ReactModal from "react-modal";
import { useState } from "react";
import HeaderModal from "../../components/imoveisComponents/modal/header/index.jsx";
import ShortPropriedades from "../../components/imoveisComponents/modal/shortPropriedades/index.jsx";
import HeaderModalEdit from "../../components/imoveisComponents/modalEdit/header/index.jsx";
import ShortPropriedadesEdit from "../../components/imoveisComponents/modalEdit/shortPropriedades/index.jsx";
import HeaderModalDados from "../../components/imoveisComponents/modalDados/header/index.jsx";
import ShortPropriedadesDados from "../../components/imoveisComponents/modalDados/shortPropriedades/index.jsx";

ReactModal.setAppElement("#root");

function Imoveis() {
  const [modalCreateIsOpen, setIsOpenCreate] = useState(false);
  const [modalEditIsOpen, setIsOpenEdit] = useState(false);
  const [modalDadosIsOpen, setIsOpenDados] = useState(false);

  const handleOpenModalCreate = () => {
    return setIsOpenCreate(true);
  };

  const handleCloseModalCreate = () => {
    return setIsOpenCreate(false);
  };

  const [imovelSelecionado, setImovelSelecionado] = useState(null);

  const handleOpenModalEdit = (imovel) => {
    setImovelSelecionado(imovel);
    setIsOpenEdit(true);
  };

  const handleCloseModalEdit = () => {
    return setIsOpenEdit(false);
  };

  const handleOpenModalDados = (imovel) => {
    setImovelSelecionado(imovel);
    setIsOpenDados(true);
  };

  const handleCloseModalDados = () => {
    return setIsOpenDados(false);
  };

  return (
    <Containner>
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
        onRequestClose={handleOpenModalEdit}
        style={{
          content: {
            padding: "0px",
          },
        }}
      >
        <Containner>
          <HeaderModalEdit handleCloseModalEdit={handleCloseModalEdit} />
          <br />
          <ShortPropriedadesEdit imovelProp={imovelSelecionado} />
        </Containner>
      </ReactModal>
      <ReactModal
        isOpen={modalDadosIsOpen}
        onRequestClose={handleOpenModalDados}
        style={{
          content: {
            padding: "0px",
          },
        }}
      >
        <Containner>
          <HeaderModalDados handleCloseModalDados={handleCloseModalDados} />
          <br />
          <ShortPropriedadesDados imovelProp={imovelSelecionado} />
        </Containner>
      </ReactModal>
      <Navbar />
      <Aside />
      <br />
      <Header />
      <FormPesquisar handleOpenModalCreate={handleOpenModalCreate} />
      {/* <Pesquisar/> */}
      <br />
      <Table
        handleOpenModalEdit={handleOpenModalEdit}
        handleOpenModalDados={handleOpenModalDados}
      />
    </Containner>
  );
}

export default Imoveis;
