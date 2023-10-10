import { useState } from "react";
import {Containner} from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";


function ShortPropriedades(){

    const [nome, setNome] = useState()
    const [nascimento, setDataNas] = useState()
    const [sexo, setSexo] = useState(true)
    const [telefone, setTelefone] = useState()
    const [email, setEmail] = useState()
    const [identificacao, setTipoDoc] = useState(1)
    const [identificacaoNumero, setNumDoc] = useState()
    const [observacao, setobservacao] = useState()

    const createProprietario = async(e) => {
        e.preventDefault()

        const proprietario = {nome, nascimento, sexo, telefone, email, identificacao, identificacaoNumero, observacao}

        try{
            await sbk4Fetch.post("/proprietario", proprietario)
        }catch(error){
            console.log(error)
        }
        
        location.reload()
    }

    return(
        <Containner>
           <form class="needs-validation" novalidate onSubmit={(e) => createProprietario(e)}>
            <div class="col align-self-center">
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input 
                        class="form-control" 
                        type={"text"}
                        onChange={(e) => setNome(e.target.value)}
                        ></input>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="nascimento">Data de Nascimento</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input 
                        class="form-control" 
                        type={"date"}
                        onChange={(e) => setDataNas(e.target.value)}
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
                        type={"number"}
                        onChange={(e) => setTelefone(e.target.value)}
                        ></input>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input 
                        class="form-control" 
                        type={"email"}
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <label htmlFor="sexo">Sexo</label>
                    </div>
                    <div class="col-auto mb-3">
                        <select class="form-control" name="sexo" id="selectSexo" onChange={(e) => setSexo(e.target.value === 1)}>
                            <option value={1}>Homem</option>
                            <option value={0}>Mulher</option>
                        </select>
                    </div>
                    <div class="col-auto mb-3">
                        <select class="form-control" name="indentificacao" id="selectDoc" onChange={(e) => setTipoDoc(e.target.value)}>
                            <option value={"RG"}>RG</option>
                            <option value={"CPF"}>CPF</option>
                            <option value={"CNPJ"}>CNPJ</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <input 
                        class="form-control" 
                        type={"number"}
                        onChange={(e) => setNumDoc(e.target.value)}
                        ></input>
                    </div>
                    <div class="col-5">
                        <label>observacaoervações</label>
                        <input 
                        class="form-control" 
                        type="text"
                        onChange={(e) => setobservacao(e.target.value)}
                        />
                    </div>
                    <div class="col-auto">
                        <input class="btn btn-success btn-lg" type={"submit"}/>
                    </div>
                </div>
            </div>
           </form>
        </Containner>
    )
}
export default ShortPropriedades