import Aside from "../..//components/aside/index.jsx";
import Navbar from "../..//components/navbar/index.jsx";
import Pesquisar from "../../components/inicialComponents/pesquisar/index.jsx";
import Grids from "../../components/inicialComponents/grids/index.jsx";
import { Containner } from "./styled.js";
import Header from "../../components/header/index.jsx";
function Inicial() {
  return (
    <div>
      <Containner>
        <Navbar />
        <Aside />
        <br />
        <Header />
        <Pesquisar />
        <br />
        <br />
        <Grids />
      </Containner>
    </div>
  );
}
export default Inicial;
