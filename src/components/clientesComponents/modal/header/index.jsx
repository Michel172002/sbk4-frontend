import { Containner } from "./styled.js"
function HeaderModal(handleCloseModalCreate){
    return(
        <Containner>
            <label htmlFor="titulo">Cadastrar Cliente</label>
            <button class="btn btn-danger" onClick={() => handleCloseModalCreate.handleCloseModalCreate()}>x</button>
        </Containner>
    )
}
export default HeaderModal