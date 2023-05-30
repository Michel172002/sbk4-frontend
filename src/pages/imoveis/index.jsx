import { Containner } from './styled.js'
import Aside from '../../components/aside/index.jsx'
import Header from '../../components/header/index.jsx'
import Navbar from '../../components/navbar/index.jsx'
import FormPesquisar from '../../components/imoveisComponents/formPesquisar'
import Table from '../../components/imoveisComponents/table'
import ReactModal from "react-modal";
import { useState } from "react";
import HeaderModal from '../../components/imoveisComponents/modal/header/index.jsx'
import ShortPropriedades from "../../components/imoveisComponents/modal/shortPropriedades/index.jsx"

ReactModal.setAppElement('#root');

function Imoveis(){

    const [modalIsOpen, setIsOpen] = useState(false);
    
    const handleOpenModal = () => {
      
        return setIsOpen(true);
    };

    const handleCloseModal = () => {
        return setIsOpen(false);
    }

    return(
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
    )
}

export default Imoveis