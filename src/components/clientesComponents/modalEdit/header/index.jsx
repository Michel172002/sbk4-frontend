import { Containner } from "./styled.js"
function HeaderModalEdit(handleCloseModalEdit){
    return(
        <Containner>
            <label className="mx-5" htmlFor="titulo">Editar Cliente</label>
            <button class="btn btn-danger m-1" onClick={() => handleCloseModalEdit.handleCloseModalEdit()}>x</button>
        </Containner>
    )
}
export default HeaderModalEdit
