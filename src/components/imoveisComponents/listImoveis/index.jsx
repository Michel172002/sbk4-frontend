import { Containner } from "./styled.js"
import Imovel from "./imovel/index.jsx"

function ListImoveis(){

    return(
        <Containner>
         <div className="grid">
         <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
            <Imovel/>
         </div>

        </Containner>
    )
}

export default ListImoveis