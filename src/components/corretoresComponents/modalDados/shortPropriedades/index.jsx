import {Containner} from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";

import { useEffect, useState } from "react"

const ShortPropriedadesDados = ({corretorProp}) => {

    const [corretor, setCorretor] = useState([])
    const [nome, setNome] = useState("")
    const [n_tel, setTel] = useState("")
    const [creci, setCreci] = useState("")

    const getCorretor = async (corretorId) => {
        try {
          const response = await sbk4Fetch.get(`/corretores/${corretorId}`);
          const data = response.data;
          setCorretor(data);
          setNome(data.nome)
          setCreci(data.creci)
          setTel(data.n_tel)
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
    if (corretorProp) {
        getCorretor(corretorProp.id);
    }
    }, [corretorProp]);

    return(
        <Containner>
           <form class="needs-validation" novalidate onSubmit={(e) => editCorretor(e)}>
            <div class="col align-self-center">
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="nome">Nome:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label class="form-control" htmlFor="nome">{nome}</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label  htmlFor="creci">Creci:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label class="form-control" htmlFor="creci">{creci}</label>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="telefone">Telefone:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label class="form-control" htmlFor="telefone">{n_tel}</label>
                    </div>
                </div>
            </div>
            </form>
        </Containner>
    )
}
export default ShortPropriedadesDados