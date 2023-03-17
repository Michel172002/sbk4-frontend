import { Containner } from './styled.js'
import Aside from '../../components/aside/index.jsx'
import Header from '../../components/header/index.jsx'
import Navbar from '../../components/navbar/index.jsx'
import ListImoveis from '../../components/imoveisComponents/listImoveis/index.jsx'
import Pesquisar from '../../components/imoveisComponents/pesquisar/index.jsx'
function Imoveis(){

    return(
        <div>
        <Containner>
            <Navbar/>
           <Aside/>
           <br />
           <Header/>
          <Pesquisar/>
            <ListImoveis/>
        </Containner>
     
    </div>
    )
}

export default Imoveis