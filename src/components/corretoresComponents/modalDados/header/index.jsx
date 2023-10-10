import { Containner } from "./styled.js";
function HeaderModalDados(handleCloseModalEdit) {
  return (
    <Containner>
      <label htmlFor="titulo">Dados Corretor</label>
      <button
        class="btn btn-danger"
        onClick={() => handleCloseModalEdit.handleCloseModalDados()}
      >
        x
      </button>
    </Containner>
  );
}
export default HeaderModalDados;
