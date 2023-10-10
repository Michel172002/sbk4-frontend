import { useEffect, useState } from "react";
import {Containner} from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";


function ShortPropriedadesDados({proprietarioProp}){

    const [proprietario, setProprietario] = useState([])
    const [nome, setNome] = useState("")
    const [data_nas, setDataNas] = useState("")
    const [sexo, setSexo] = useState(true)
    const [n_tel, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [identificacao, setTipoDoc] = useState(1)
    const [identificacaoNumero, setNumDoc] = useState("")
    const [obs, setObs] = useState("")

    const getProprietario = async(proprietarioId) => {
        try {
            const response = await sbk4Fetch.get(`/proprietario/${proprietarioId}`)
            const data = response.data
            setProprietario(data)
            setNome(data.nome)
            setDataNas(data.nascimento)
            setSexo(data.sexo)
            setTelefone(data.telefone)
            setEmail(data.email)
            setTipoDoc(data.identificacao)
            setNumDoc(data.identificacaoNumero)
            setObs(data.observacao)
        } catch (error) {
            console.log(error);
        }
    }

    const getSexo = (sexo) => {
        if(sexo) {
            return <label class="form-control">Homem</label>
        }else{
            return <label class="form-control">Mulher</label>
        }
    }

    const getTipoDoc = (identificacao) => {
        if(identificacao === "RG") {
            return <label>RG:</label>
        }
        if(identificacao === "CPF") {
            return <label>CPF:</label>
        }
        if(identificacao === "CNPJ") {
            return <label>CNPJ:</label>
        }
    }

    useEffect(() => {
        if(proprietarioProp){
            getProprietario(proprietarioProp.id)
        }
    }, [proprietarioProp])
    return(
        <Containner>
           <form class="needs-validation" novalidate>
            <div class="col align-self-center">
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="nome">Nome:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label class="form-control" htmlFor="nome">{nome}</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="nascimento">Data de Nascimento:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label class="form-control" htmlFor="nascimento">{data_nas}</label>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="telefone">Telefone:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label class="form-control" htmlFor="telefone">{n_tel}</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label class="form-control" htmlFor="email">{email}</label>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <label htmlFor="sexo">Sexo:</label>
                    </div>
                    <div class="col-auto mb-3">
                        {getSexo(sexo)}
                    </div>
                    <div class="col-auto mb-3">
                        {getTipoDoc(identificacao)}
                    </div>
                    <div class="col-auto">
                        <label class="form-control">{identificacaoNumero}</label>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-5">   
                        <label>Observações:</label>
                        <label class="form-control">{obs}</label>
                    </div>
                </div> 
            </div>
           </form>
        </Containner>
    )
}
export default ShortPropriedadesDados