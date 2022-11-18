import {Containner} from "./styled.js"
import HeaderModal from "./header/index.jsx"
import ShortPropriedades from "./shortPropriedades/index.jsx"
function Modal(){
    return(
       
        <Containner>
            <HeaderModal/>
            <br />
            <ShortPropriedades/>
        </Containner>
     
    )
}
export default Modal