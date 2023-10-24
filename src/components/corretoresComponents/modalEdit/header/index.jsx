import { Containner } from "./styled.js";
function HeaderModal(handleCloseModalEdit) {
  return (
    <Containner>
      <label className="mx-5" htmlFor="titulo">Editar Corretor</label>
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
