import { Containner } from "./styled.js";
import ReactModal from "react-modal";
import { useState } from "react";
import Aside from "../../components/aside/index.jsx"
import Navbar from "../../components/navbar/index.jsx";
import Header from "../../components/header/index.jsx";
import Form from "../../components/proprietariosComponents/formPesquisar/index.jsx"
import Table from "../../components/proprietariosComponents/table/index.jsx"
import Modal from "../../components/proprietariosComponents/modal/index.jsx"
import Pesquisar from "../../components/proprietariosComponents/pesquisar/index.jsx";

ReactModal.setAppElement('#root');

function Proprietarios(){
    
    const [modalIsOpen,setIsOpen]=useState(false);
    const handleOpenModal=()=>{
        return setIsOpen(true);
    }
    const handleCloseModal=()=>{
        return setIsOpen(false);
    }
    const teste=()=>{
        return  alert("teste");
    }

    return(
        <div>
            <Containner>
                
                <ReactModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                <Modal/>
                </ReactModal>
                <Navbar/>
                <Aside/>
                <br />
                <Header/>   
                <br /><br />
                <Pesquisar/>
                <br /><br /><br /><br /><br /><br />
                {/* <Form/> */}
                <br />
                <Table
                handleOpenModal={handleOpenModal}
                />
                
            </Containner>
        </div>
    )
}

export default Proprietarios