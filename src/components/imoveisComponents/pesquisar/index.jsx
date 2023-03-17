import {Containner} from "./styled.js"
import {FaSearch} from 'react-icons/fa';
function Pesquisar(){

    return(
        <div>
            <Containner>
                <form action="">
                    <input type="text" placeholder="Pesquisar" />
                    <button><li><FaSearch/></li></button>
                </form>
                
            </Containner>
            
        </div>
    )
}
export default Pesquisar