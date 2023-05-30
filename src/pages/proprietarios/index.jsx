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

ReactModal.setAppElement('#root');

function Proprietarios(){

    const [modalIsOpen, setIsOpen] = useState(false);
    
    const handleOpenModal = () => {
        return setIsOpen(true);
    };

    const handleCloseModal = () => {
        return setIsOpen(false);
    }
    
    return(
        <div>
            <Containner>
                <ReactModal isOpen={modalIsOpen} onRequestClose={handleOpenModal}>           
                    <Containner>
                        <HeaderModal handleCloseModal = {handleCloseModal}/>
                        <br />
                        <ShortPropriedades/>
                    </Containner>
                </ReactModal>
                <Navbar/>
                <Aside/>
                <br />
                <Header/>
                <FormPesquisar
                handleOpenModal={handleOpenModal}
                />
                {/* <Pesquisar/> */}
                <br />
                <Table/>
            </Containner>
        </div>
    )
}

export default Proprietarios