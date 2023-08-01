import { useState } from "react";
import {Containner} from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";

const ShortPropriedades= () => {
    const [nome, setNome] = useState()
    const [data_nas, setDataNas] = useState()
    const [sexo, setSexo] = useState(true)
    const [n_tel, setTelefone] = useState()
    const [email, setEmail] = useState()
    const [t_doc, setTipoDoc] = useState(1)
    const [n_doc, setNumDoc] = useState()
    const [obs, setObs] = useState()
    const [t_search, setProcTipo] = useState()
    const [a_search, setAlugar] = useState()
    const [c_search, setComodos] = useState()

    const createCliente = async(e) => {
        const cliente = {nome, data_nas, sexo, n_tel, email, t_doc, n_doc, obs, t_search, a_search, c_search, active: true}
        
        try{
            await sbk4Fetch.post("/clientes/", cliente)
        }catch(error){
            console.log(error);
        }
    }

    return(
        <Containner>
           <form class="needs-validation" novalidate onSubmit={(e) => createCliente(e)}>
            <div class="col align-self-center">
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <div>
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div>
                            <input
                            class="form-control"
                            type={"text"}
                            onChange={(e) => setNome(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div>
                            <label htmlFor="nascimento">Data de Nascimento</label>
                        </div>
                        <div>
                            <input 
                            class="form-control" 
                            type={"date"}
                            onChange={(e) => setDataNas(e.target.value)}
                            ></input>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-auto mb-2">
                        <div>
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                        <div class="col-auto">
                            <input 
                            class="form-control" 
                            type={"number"}
                            onChange={(e) => setTelefone(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div class="col-auto">
                            <input 
                            class="form-control" 
                            type={"email"}
                            onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <label htmlFor="sexo">Sexo</label>
                        <div>
                            <select class="form-control" name="sexo" id="selectSexo" onChange={(e) => setSexo(e.target.value)}>
                                <option value={true}>Homem</option>
                                <option value={false}>Mulher</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-auto mb-3">
                        <div class="col-3">
                            <select class="form-control" name="indentificacao" id="selectDoc" onChange={(e) => setTipoDoc(e.target.value)}>
                                <option value={"1"} >RG</option>
                                <option value={"2"} >CNH</option>
                                <option value={"3"} >CPF</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <input 
                            class="form-control" 
                            type={"number"}
                            onChange={(e) => setNumDoc(e.target.value)}
                            ></input>
                        </div>
                    </div>
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <label htmlFor="procura">Procurando</label>
                        <input 
                        class="form-control" 
                        type={"text"}
                        onChange={(e) => setProcTipo(e.target.value)}
                        ></input>
                    </div> 
                    
                    <div class="col-auto mb-3">
                        <div>
                            <div>
                                <label htmlFor="comodos">Comodos</label>
                            </div>
                            <div class="col-auto mb-2">
                                <input 
                                class="form-control" 
                                type={"text"}
                                onChange={(e) => setComodos(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div class="row align-items-center">
                        <div class="col-auto offset-md-3">
                            <label htmlFor="tipo">Tipo</label>
                            <div>
                                <div>
                                    <input type="radio" id="alugar" name="tipoRadio" value={"alugar"} onChange={() => setAlugar(true)}></input>
                                    <label htmlFor="alugar">Alugar</label>
                                </div>
                                <div>
                                    <input type="radio" id="comprar" name="tipoRadio" value={"comprar"} onChange={() => setAlugar(false)}></input>
                                    <label htmlFor="comprar">Comprar</label>
                                </div>
                            </div>
                        </div>
                    <label>Observações</label>
                    <input 
                    class="form-control" 
                    type="text"
                    onChange={(e) => setObs(e.target.value)}
                    />
                    </div>
                        <div class="col-auto">
                            <input class="btn btn-success btn-lg" type={"submit"}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
           </form>
        </Containner>
    )
}
export default ShortPropriedades