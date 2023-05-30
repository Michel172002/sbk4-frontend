import { Containner } from "./styled.js"
function HeaderModal(handleCloseModal){
    return(
        <Containner>
            <label htmlFor="titulo">Cadastrar Corretor</label>
            <button class="btn btn-danger" onClick={() => handleCloseModal.handleCloseModal()}>x</button>
        </Containner>
    )
}
export default HeaderModal