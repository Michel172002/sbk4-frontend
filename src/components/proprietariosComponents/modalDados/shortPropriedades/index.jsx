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

    const getSexo = (sexo) => {
        if(sexo) {
            return <label>Homem</label>
        }else{
            return <label>Mulher</label>
        }
    }

    const getTipoDoc = (t_doc) => {
        if(t_doc === 1) {
            return <label>RG:</label>
        }
        if(t_doc === 2) {
            return <label>CNH:</label>
        }
        if(t_doc === 3) {
            return <label>CPF:</label>
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
                        <label htmlFor="nome">{nome}</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="nascimento">Data de Nascimento:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="nascimento">{data_nas}</label>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="telefone">Telefone:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="telefone">{n_tel}</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="email">{email}</label>
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
                        {getTipoDoc(t_doc)}
                    </div>
                    <div class="col-auto">
                        <label>{n_doc}</label>
                    </div>
                    <label>Observações:</label>
                    <label>{obs}</label>
                </div>
            </div>
           </form>
        </Containner>
    )
}
export default ShortPropriedadesDados