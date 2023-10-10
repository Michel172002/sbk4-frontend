import { Containner } from "./styled.js";
function HeaderModal(handleCloseModalEdit) {
  return (
    <Containner>
      <label htmlFor="titulo">Editar Corretor</label>
      <button
        class="btn btn-danger"
        onClick={() => handleCloseModalEdit.handleCloseModalEdit()}
      >
        x
      </button>
    </Containner>
  );
}
export default HeaderModal;
