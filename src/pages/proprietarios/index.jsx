import { Containner } from "./styled.js";
import ReactModal from "react-modal";
import { useState } from "react";
import Aside from "../../components/aside/index.jsx"
import Navbar from "../../components/navbar/index.jsx";
import Header from "../../components/header/index.jsx";
import Table from "../../components/proprietariosComponents/table/index.jsx"
import HeaderModal from "../../components/proprietariosComponents/modal/header/index.jsx";
import ShortPropriedades from "../../components/proprietariosComponents/modal/shortPropriedades/index.jsx"
import FormPesquisar from "../../components/proprietariosComponents/formPesquisar/index.jsx";
import HeaderModalEdit from "../../components/proprietariosComponents/modalEdit/header/index.jsx";
import ShortPropriedadesEdit from "../../components/proprietariosComponents/modalEdit/shortPropriedades/index.jsx";
import HeaderModalDados from "../../components/proprietariosComponents/modalDados/header/index.jsx";
import ShortPropriedadesDados from "../../components/proprietariosComponents/modalDados/shortPropriedades/index.jsx";

ReactModal.setAppElement('#root');

function Proprietarios(){

    const [modalCreateIsOpen, setIsOpenCreate] = useState(false)
    const [modalEditIsOpen, setIsOpenEdit] = useState(false)
    const [modalDadosIsOpen, setIsOpenDados] = useState(false)
    
    const handleOpenModalCreate = () => {
        return setIsOpenCreate(true);
    };

    const handleCloseModalCreate = () => {
        return setIsOpenCreate(false)
    }

    const [proprietarioSelecionado, setProprietarioSelecionado] = useState(null);

    const handleOpenModalEdit = (proprietario) => {
        setProprietarioSelecionado(proprietario)
        setIsOpenEdit(true)
    }

    const handleCloseModalEdit = () => {
        return setIsOpenEdit(false)
    }

    const handleOpenModalDados = (proprietario) => {
        setProprietarioSelecionado(proprietario)
        setIsOpenDados(true)
    }

    const handleCloseModalDados = () => {
        return setIsOpenDados(false)
    }
    
    return(
        <div>
            <Containner>
                <ReactModal isOpen={modalCreateIsOpen} onRequestClose={handleOpenModalCreate} style={{content:{
                padding:"0px"
            }}}>           
                    <Containner>
                        <HeaderModal handleCloseModalCreate = {handleCloseModalCreate}/>
                        <br />
                        <ShortPropriedades/>
                    </Containner>
                </ReactModal>
                <ReactModal isOpen={modalEditIsOpen} onRequestClose={handleCloseModalEdit} style={{content:{
                padding:"0px"
            }}}>
                    <Containner>
                        <HeaderModalEdit handleCloseModalEdit = {handleCloseModalEdit}/>
                        <br/>
                        <ShortPropriedadesEdit proprietarioProp={proprietarioSelecionado}/>
                    </Containner>
                </ReactModal>
                <ReactModal isOpen={modalDadosIsOpen} onRequestClose={handleCloseModalDados} style={{content:{
                padding:"0px"
            }}}>
                    <Containner>
                        <HeaderModalDados handleCloseModalDados={handleCloseModalDados}/>
                        <br/>
                        <ShortPropriedadesDados proprietarioProp={proprietarioSelecionado}/>
                    </Containner>
                </ReactModal>
                <Navbar/>
                <Aside/>
                <br />
                <Header/>
                <FormPesquisar handleOpenModal={handleOpenModalCreate}/>
                {/* <Pesquisar/> */}
                <br />
                <Table handleOpenModalEdit={handleOpenModalEdit} handleOpenModalDados={handleOpenModalDados}/>
            </Containner>
        </div>
    )
}

export default Proprietarios