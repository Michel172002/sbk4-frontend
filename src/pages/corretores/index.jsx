import { Containner } from './styled.js'
import Aside from '../../components/aside/index.jsx'
import Navbar from '../../components/navbar/index.jsx'
import Header from '../../components/header/index.jsx'
import FormPesquisar from '../../components/corretoresComponents/formPesquisar'
import Table from '../../components/corretoresComponents/table'
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import HeaderModal from '../../components/corretoresComponents/modal/header/index.jsx'
import ShortPropriedades from "../../components/corretoresComponents/modal/shortPropriedades/index.jsx"
import ShortPropriedadesEdit from '../../components/corretoresComponents/modalEdit/shortPropriedades/index.jsx'
import HeaderModalEdit from '../../components/corretoresComponents/modalEdit/header/index.jsx'
import sbk4Fetch from '../../axios/config.js'

ReactModal.setAppElement('#root');

function Corretores(){

    const [modalCreateIsOpen, setIsOpenCreate] = useState(false)
    const [modalEditIsOpen, setIsOpenEdit] = useState(false)
    
    const handleOpenModalCreate = () => {
        return setIsOpenCreate(true);
    };

    const handleCloseModalCreate = () => {
        return setIsOpenCreate(false)
    }

    const [corretorSelecionado, setCorretorSelecionado] = useState(null);

    const handleOpenModalEdit = (corretor) => {
        setCorretorSelecionado(corretor)
        setIsOpenEdit(true)
    }

    const handleCloseModalEdit = () => {
        return setIsOpenEdit(false)
    }

    return(
        <Containner>
            <ReactModal isOpen={modalCreateIsOpen} onRequestClose={handleOpenModalCreate}>
                <Containner>
                    <HeaderModal handleCloseModalCreate={handleCloseModalCreate}/>
                    <br />
                    <ShortPropriedades/>
                </Containner>
            </ReactModal>
            <ReactModal isOpen={modalEditIsOpen} onRequestClose={handleCloseModalEdit}>
                <Containner>
                    <HeaderModalEdit handleCloseModalEdit={handleCloseModalEdit}/>
                    <br/>
                    <ShortPropriedadesEdit corretorProp={corretorSelecionado} />
                </Containner>
            </ReactModal>
            <Navbar/>
            <Aside/>
            <br />
            <Header/>
            <FormPesquisar handleOpenModalCreate={handleOpenModalCreate}/>
            {/* <Pesquisar/> */}
            <br />
            <Table handleOpenModalEdit={handleOpenModalEdit}/>
        </Containner>
    )
}
export default Corretores