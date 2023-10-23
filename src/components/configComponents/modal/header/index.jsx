import { Containner } from "./styled.js"
function HeaderModal(handleCloseModalCreate){
    return(
        <Containner>
            <label className="mx-5" htmlFor="titulo">Cadastrar Usuário</label>
            <button class="btn btn-danger m-1" onClick={() => handleCloseModalCreate.handleCloseModalCreate()}>X</button>
        </Containner>
    )
}
export default HeaderModal
