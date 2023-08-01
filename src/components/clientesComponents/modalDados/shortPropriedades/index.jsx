import { useEffect, useState } from "react";
import {Containner} from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";

const ShortPropriedadesDados= ({clienteProp}) => {
    const [nome, setNome] = useState("")
    const [data_nas, setDataNas] = useState("")
    const [sexo, setSexo] = useState(true)
    const [n_tel, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [t_doc, setTipoDoc] = useState(1)
    const [n_doc, setNumDoc] = useState("")
    const [obs, setObs] = useState("")
    const [t_search, setProcTipo] = useState("")
    const [a_search, setAlugar] = useState("")
    const [c_search, setComodos] = useState("")

    const getCliente = async(clienteId) => {
        try {
            const response = await sbk4Fetch.get(`/clientes/${clienteId}`)
            const data = response.data
            setNome(data.nome)
            setDataNas(data.data_nas)
            setSexo(data.sexo)
            setTelefone(data.n_tel)
            setEmail(data.email)
            setTipoDoc(data.t_doc)
            setNumDoc(data.n_doc)
            setObs(data.obs)
            setProcTipo(data.t_search)
            setAlugar(data.a_search)
            setComodos(data.c_search)
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

    const getTipoDoc = (t_doc) => {
        if(t_doc === 1) {
            return <label>RG:</label>
        }
        if(t_doc === 2) {
            return <label>CNH:</label>
        }
        if(t_doc === 3) {
            return <label >CPF:</label>
        }
    }

    const getTipoProc = (a_search) => {
        if(a_search){
            return <label class="form-control" htmlFor="tipo_proc">Alugar</label>
        }else{
            return <label class="form-control" htmlFor="tipo_proc">Comprar</label>
        }
    }

    useEffect(() => {
        if(clienteProp){
            getCliente(clienteProp.id)
        }
    }, [clienteProp])

    return(
        <Containner>
           <form class="needs-validation" novalidate>
            <div class="col align-self-center">
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <div>
                            <label htmlFor="nome">Nome:</label>
                        </div>
                        <div>
                            <label class="form-control">{nome}</label>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div>
                            <label htmlFor="nascimento">Data de Nascimento:</label>
                        </div>
                        <div>
                            <label class="form-control" htmlFor="nascimento">{data_nas}</label>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-auto mb-2">
                        <div>
                            <label htmlFor="telefone">Telefone:</label>
                        </div>
                        <div class="col-auto">
                            <label class="form-control" htmlFor="telefone">{n_tel}</label>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div>
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div class="col-auto">
                            <label class="form-control" htmlFor="email">{email}</label>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <label htmlFor="sexo">Sexo:</label>
                        <div>
                            {getSexo(sexo)}
                        </div>
                    </div>
                    <div class="col-auto mb-3">
                        <div class="col-3">
                            {getTipoDoc(t_doc)}
                        </div>
                        <div class="col-auto">
                            <label  class="form-control" htmlFor="n_doc">{n_doc}</label>
                        </div>
                    </div>
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <label htmlFor="procura">Procurando:</label>
                        <label class="form-control" htmlFor="procura">{t_search}</label>
                    </div> 
                    <div class="col-auto mb-3">
                        <div>
                            <div>
                                <label htmlFor="comodos">Comodos:</label>
                            </div>
                            <div class="col-auto mb-2">
                                <label class="form-control" htmlFor="comodos">{c_search}</label>
                            </div>
                        </div>
                        <div class="row align-items-center">
                        <div class="col-auto offset-md-3">
                            <label htmlFor="tipo">Tipo:</label>
                            <div>
                                {getTipoProc(a_search)}
                            </div>
                        </div>
                    <label>Observações</label>
                    <label class="form-control" htmlFor="obs">{obs}</label>
                    </div>
                    </div>
                </div>
                </div>
            </div>
           </form>
        </Containner>
    )
}
export default ShortPropriedadesDados