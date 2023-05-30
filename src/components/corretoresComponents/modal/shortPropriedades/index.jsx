import {Containner} from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";

import { useState } from "react"

const ShortPropriedades = () => {

    const[nome, setName] = useState()
    const[n_tel, setTel] = useState()
    const[creci, setCreci] = useState()

    const createCorretor = async(e) => {
        e.preventDefault()

        const post = {nome, n_tel, creci, ativo: true}
        
        try{
            await sbk4Fetch.post("/corretores/", {
                body: post
            })
        }catch(error){
            console.log(error);
        }
    }

    return(
        <Containner>
           <form method="post" class="needs-validation" novalidate onSubmit={(e) => createCorretor(e)}>
            <div class="col align-self-center">
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input 
                        class="form-control" 
                        type={"text"}
                        onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="creci">Creci</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input 
                        class="form-control" 
                        type={"text"}
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
                        onChange={(e) => setTel(e.target.value)}
                        ></input>
                    </div>
                    <div class="col-auto setoff-mb-3">
                        <input type="submit" value="Criar Corretor" class="btn btn-success btn-lg"/>
                    </div>
                </div>
            </div>
            </form>
        </Containner>
    )
}
export default ShortPropriedades