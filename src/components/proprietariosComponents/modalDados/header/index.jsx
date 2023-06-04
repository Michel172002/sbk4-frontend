import { Containner } from "./styled.js"
function HeaderModalDados({handleCloseModalDados}){
    return(
        <Containner>
            <label htmlFor="titulo">Dados Proprietario</label>
            <button class="btn btn-danger" onClick={() => handleCloseModalDados()}>x</button>
        </Containner>
    )
}
export default HeaderModalDados