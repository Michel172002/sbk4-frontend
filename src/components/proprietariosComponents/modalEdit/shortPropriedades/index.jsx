import { useEffect, useState } from "react";
import {Containner} from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";


function ShortPropriedadesEdit({proprietarioProp}){

    const [proprietario, setProprietario] = useState([])
    const [nome, setNome] = useState("")
    const [data_nas, setDataNas] = useState("")
    const [sexo, setSexo] = useState(true)
    const [n_tel, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [t_doc, setTipoDoc] = useState(1)
    const [n_doc, setNumDoc] = useState("")
    const [obs, setObs] = useState("")

    const getProprietario = async(proprietarioId) => {
        try {
            const response = await sbk4Fetch.get(`/proprietarios/${proprietarioId}/`)
            const data = response.data
            setProprietario(data)
            setNome(data.nome)
            setDataNas(data.data_nas)
            setSexo(data.sexo)
            setTelefone(data.n_tel)
            setEmail(data.email)
            setTipoDoc(data.t_doc)
            setNumDoc(data.n_doc)
            setObs(data.obs)
        } catch (error) {
            console.log(error);
        }
    }

    const editProprietario = async(e) => {
        const proprietario = {nome, data_nas, sexo, n_tel, email, t_doc, n_doc, obs}
        try{
            await sbk4Fetch.put(`/proprietarios/${proprietarioProp.id}/`, proprietario)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(proprietarioProp){
            getProprietario(proprietarioProp.id)
        }
    }, [proprietarioProp])
    return(
        <Containner>
           <form class="needs-validation" novalidate onSubmit={(e) => editProprietario(e)}>
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
                        <label htmlFor="nascimento">Data de Nascimento</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input 
                        class="form-control" 
                        type={"date"}
                        value={data_nas}
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
                        value={n_tel}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <label htmlFor="sexo">Sexo</label>
                    </div>
                    <div class="col-auto mb-3">
                        <select class="form-control" name="sexo" id="selectSexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                            <option value={1}>Homem</option>
                            <option value={0}>Mulher</option>
                        </select>
                    </div>
                    <div class="col-auto mb-3">
                        <select class="form-control" name="indentificacao" id="selectDoc" value={t_doc} onChange={(e) => setTipoDoc(e.target.value)}>
                            <option value={1}>RG</option>
                            <option value={2}>CNH</option>
                            <option value={3}>CPF</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <input 
                        class="form-control" 
                        type={"number"}
                        value={n_doc}
                        onChange={(e) => setNumDoc(e.target.value)}
                        ></input>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-6">
                            <label>Observações</label>
                            <input 
                            class="form-control" 
                            type="text"
                            value={obs}
                            onChange={(e) => setObs(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <input class="btn btn-success btn-lg" type={"submit"}/>
                    </div>
                </div>
            </div>
           </form>
        </Containner>
    )
}
export default ShortPropriedadesEdit