import { Containner } from './styled.js'
import Aside from '../../components/aside/index.jsx'
import Header from '../../components/header/index.jsx'
import Navbar from '../../components/navbar/index.jsx'
function Imoveis(){

    return(
        <div>
        <Containner>
            <Navbar/>
           <Aside/>
           <br />
           <Header/>
        </Containner>
     
    </div>
    )
}

export default Imoveis