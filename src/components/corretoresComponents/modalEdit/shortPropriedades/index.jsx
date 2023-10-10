import {Containner} from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";

import { useEffect, useState } from "react"

const ShortPropriedadesEdit = ({corretorProp}) => {

    const [corretor, setCorretor] = useState([])
    const [nome, setNome] = useState("")
    const [telefone, setTel] = useState("")
    const [creci, setCreci] = useState("")

    const getCorretor = async (corretorId) => {
        try {
          const response = await sbk4Fetch.get(`/corretor/${corretorId}`);
          const data = response.data;
          setCorretor(data);
          setNome(data.nome)
          setCreci(data.creci)
          setTel(data.telefone)
        } catch (error) {
          console.log(error);
        }
    }

    const editCorretor = async(e) => {
        e.preventDefault()
        const corretorEditado = {nome, telefone, creci, ativo: true}
        try {
            await sbk4Fetch.put(`/corretor/${corretorProp.id}`, corretorEditado)
        } catch (error) {
            console.log(error);
        }
        location.reload(); 
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
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input 
                        class="form-control" 
                        type={"text"}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        ></input>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="creci">Creci</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input 
                        class="form-control" 
                        type={"text"}
                        value={creci}
                        onChange={(e) => setCreci(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input 
                        class="form-control" 
                        type={"text"}
                        value={telefone}
                        onChange={(e) => setTel(e.target.value)}
                        ></input>
                    </div>
                    <div class="col-auto setoff-mb-3">
                        <input type="submit" value="Editar Corretor" class="btn btn-success btn-lg"/>
                    </div>
                </div>
            </div>
            </form>
        </Containner>
    )
}
export default ShortPropriedadesEdit