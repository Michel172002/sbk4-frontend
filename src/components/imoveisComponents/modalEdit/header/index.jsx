import { Containner } from "./styled.js"
function HeaderModalEdit(handleCloseModalEdit){
    return(
        <Containner>
            <label htmlFor="titulo">Editar Imovel</label>
            <button class="btn btn-danger" onClick={() => handleCloseModalEdit.handleCloseModalEdit()}>x</button>
        </Containner>
    )
}
export default HeaderModalEdit