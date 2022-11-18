import Aside from '../..//components/aside/index.jsx'
import Navbar from '../..//components/navbar/index.jsx'
import Pesquisar from '../../components/clientesComponents/pesquisar/index.jsx'
import Table from '../../components/clientesComponents/table/index.jsx'
import FormPesquisar from '../../components/clientesComponents/formPesquisar/index.jsx'
import Header from '../../components/header/index.jsx'
import { Containner } from './styled.js'
function Clientes(){

    return(
        <div>
        <Containner>
        <Navbar/>
        <Aside/>
        <br />
        <Header/>
        
        <FormPesquisar/>
        {/* <Pesquisar/> */}
        <br />
        <Table/>
        </Containner>
     
    </div>
    )
}

export default Clientes