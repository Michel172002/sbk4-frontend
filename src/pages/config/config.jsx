import Aside from "../../components/aside";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import sbk4Fetch from "../../axios/config";
import { useState, useEffect } from 'react';
import Table from '../../components/configComponents/table/index';
import ShortPropriedades from '../../components/configComponents/modal/shortPropriedades/index';
import ShortPropriedadesEdit from '../../components/configComponents/modalEdit/shortPropriedades/index';
import HeaderModal from '../../components/configComponents/modal/header/index';
import HeaderModalEdit from '../../components/configComponents/modalEdit/header/index'
import ReactModal from "react-modal";

const Config = () => {
  const [modalCreateIsOpen, setIsOpenCreate] = useState(false);
  const [modalEditIsOpen, setIsOpenEdit] = useState(false);
  const [userSelecionado, setUserSelecionado] = useState(null);
  const [users, setUsers] = useState([]);

  // Users
  const getUsers = async () => {
    try {
      const response = await sbk4Fetch.get("/user");

      const data = response.data;

      setUsers(data.content);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  // Modais
  const handleOpenModalCreate = () => {
    return setIsOpenCreate(true);
  };

  const handleCloseModalCreate = () => {
    return setIsOpenCreate(false);
  };

  const handleOpenModalEdit = (user) => {
    setUserSelecionado(user);
    setIsOpenEdit(true);
  };

  const handleCloseModalEdit = () => {
    return setIsOpenEdit(false);
  };


  return (
    <>
      <Navbar />
      <Aside />
      <br />
      <Header />
      <br />
      <Table
        handleOpenModalEdit={handleOpenModalEdit}
        users={users}
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
        <div>
          <HeaderModal handleCloseModalCreate={handleCloseModalCreate} />
          <br />
          <ShortPropriedades />
        </div>
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
        <div>
          <HeaderModalEdit handleCloseModalEdit={handleCloseModalEdit} />
          <br />
          <ShortPropriedadesEdit userProp={userSelecionado} />
        </div>
      </ReactModal>
    </>
  )
}

export default Config;
