import Aside from "../..//components/aside/index.jsx";
import Navbar from "../..//components/navbar/index.jsx";
import ReactModal from "react-modal";
import { useState } from "react";
import HeaderModal from "../..//components/clientesComponents/modal/header/index.jsx";
import ShortPropriedades from "../..//components/clientesComponents/modal/shortPropriedades/index.jsx";
import Table from "../../components/clientesComponents/table/index.jsx";
import FormPesquisar from "../../components/clientesComponents/formPesquisar/index.jsx";
import Header from "../../components/header/index.jsx";
import { Containner } from "./styled.js";
import HeaderModalEdit from "../../components/clientesComponents/modalEdit/header/index.jsx";
import ShortPropriedadesEdit from "../../components/clientesComponents/modalEdit/shortPropriedades/index.jsx";
import HeaderModalDados from "../../components/clientesComponents/modalDados/header/index.jsx";
import ShortPropriedadesDados from "../../components/clientesComponents/modalDados/shortPropriedades/index.jsx";

ReactModal.setAppElement("#root");

function Clientes() {
  const [modalCreateIsOpen, setIsOpenCreate] = useState(false);
  const [modalEditIsOpen, setIsOpenEdit] = useState(false);
  const [modalDadosIsOpen, setIsOpenDados] = useState(false);

  const handleOpenModalCreate = () => {
    return setIsOpenCreate(true);
  };

  const handleCloseModalCreate = () => {
    return setIsOpenCreate(false);
  };

  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const handleOpenModalEdit = (cliente) => {
    setClienteSelecionado(cliente);
    setIsOpenEdit(true);
  };

  const handleCloseModalEdit = () => {
    return setIsOpenEdit(false);
  };

  const handleOpenModalDados = (cliente) => {
    setClienteSelecionado(cliente);
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
          <ShortPropriedadesEdit clienteProp={clienteSelecionado} />
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
          <ShortPropriedadesDados clienteProp={clienteSelecionado} />
        </Containner>
      </ReactModal>
      <Navbar />
      <Aside />
      <br />
      <Header />
      <FormPesquisar handleOpenModal={handleOpenModalCreate} />
      {/* <Pesquisar/> */}
      <br />
      <Table
        handleOpenModalEdit={handleOpenModalEdit}
        handleOpenModalDados={handleOpenModalDados}
      />
    </Containner>
  );
}

export default Clientes;
