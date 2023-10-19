import { Containner } from "./styled.js"
function HeaderModalEdit(handleCloseModalEdit){
    return(
        <Containner>
            <label className="mx-5" htmlFor="titulo">Editar Imóvel</label>
            <button class="btn btn-danger" onClick={() => handleCloseModalEdit.handleCloseModalEdit()}>x</button>
        </Containner>
    )
}
export default HeaderModalEdit
