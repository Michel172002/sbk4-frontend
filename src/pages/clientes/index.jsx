import Aside from '../..//components/aside/index.jsx'
import Navbar from '../..//components/navbar/index.jsx'
import ReactModal from "react-modal";
import { useState } from "react";
import HeaderModal from "../..//components/clientesComponents/modal/header/index.jsx"
import ShortPropriedades from "../..//components/clientesComponents/modal/shortPropriedades/index.jsx"
import Table from '../../components/clientesComponents/table/index.jsx'
import FormPesquisar from '../../components/clientesComponents/formPesquisar/index.jsx'
import Header from '../../components/header/index.jsx'
import { Containner } from './styled.js'

ReactModal.setAppElement('#root');

function Clientes(){

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
            <ReactModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>   
                <Containner>
                    <HeaderModal handleCloseModal={handleCloseModal}/>
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

export default Clientes