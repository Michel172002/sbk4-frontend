 import { useState } from "react";
import {Containner} from "./styled.js";
import { useEffect } from "react";
import sbk4Fetch from "../../../../axios/config.js";
function ShortPropriedadesDados({imovelProp}){

    const getProprietario = async(id) => {
        try{
            const response = await sbk4Fetch.get(`/proprietario/${id}`)
            const data = response.data
            setProprietario(data)
          }catch(error){
            console.log(error)
        }
    }

    const [proprietario, setProprietario] = useState([])
    const [tipo, setTipo] = useState("CASA")
    const [preco, setPreco] = useState("")
    const [alugando, setAlugando] = useState(false)
    const [financia, setFinancia] = useState(false)
    const [area, setArea] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [estado, setEstado] = useState("")
    const [cep, setCep] = useState("")
    const [comodos, setComodos] = useState("")
    const [descricao, setDescricao] = useState("")

    const getImovel = async(imovelId) => {
        try {
            const response = await sbk4Fetch.get(`/imovel/${imovelId}`)
            const data = response.data
            getProprietario(data.proprietario.id)
            setTipo(data.tipo)
            setPreco(data.preco)
            setAlugando(data.alugando)
            setFinancia(data.financia)
            setArea(data.area)
            setRua(data.rua)
            setBairro(data.bairro)
            setCidade(data.cidade)
            setNumero(data.numero)
            setComplemento(data.complemento)
            setEstado(data.estado)
            setCep(data.cep)
            setComodos(data.comodos)
            setDescricao(data.descricao)
        } catch (error) {
            console.log(error);
        }
    }

    const getTipo = (tipo) => {
        if(tipo === "APARTAMENTO"){
            return <label class="form-control">APARTAMENTO</label>
        }
        if(tipo === "LOTE"){
            return <label class="form-control">LOTE</label>
        }
        if(tipo === "SALA COMERCIAL"){
            return <label class="form-control">SALA COMERCIAL</label>
        }
        if(tipo === "KIT NET"){
            return <label class="form-control">KIT NET</label>
        }
        if(tipo === "CHACARA"){
            return <label class="form-control">CHACARA</label>
        }
        if(tipo === "TERRENO"){
            return <label class="form-control">TERRENO</label>
        }
    }

    const getFinancia = (financia) => {
        if(financia){
            return <label class="form-control">Financiavel</label>
        }else{
            return <label class="form-control">Não Financiavel</label>
        }
    }

    const getAlugando = (alugando) => {
        if(alugando){
            return <label class="form-control" >Disponivel para Locação</label>
        }else{
            return <label class="form-control">Disponivel para venda</label>
        }
    }

    useEffect(() => {
        if(imovelProp){
            getImovel(imovelProp.id)
        }
    }, [imovelProp])

    return(
        <Containner>
           <form class="needs-validation" novalidate>
            <div class="col align-self-center">
                <div class="row justify-content-around">
                    <div class="col-8">
                        <div>
                            <label htmlFor="rua">Rua:</label>
                        </div>
                        <div>
                            <label class="form-control" htmlFor="rua">{rua}</label>
                        </div>
                    </div>
                    <div class="col-2 mb-2">
                        <div>
                            <label htmlFor="numero">Numero:</label>
                        </div>
                        <div>
                            <label class="form-control" htmlFor="numero">{numero}</label>
                        </div>
                    </div>
                    <div class="col-auto mb-2">
                        <div>
                            <label htmlFor="bairro">Bairro:</label>
                        </div>
                        <div>
                            <label class="form-control" htmlFor="bairro">{bairro}</label>
                        </div>
                    </div>
                    <div class="col-auto mb-2">
                        <div>
                            <label htmlFor="cidade">Cidade:</label>
                        </div>
                        <div>
                            <label class="form-control" htmlFor="cidade">{cidade}</label>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-auto mb-2">
                        <div>
                            <label htmlFor="estado">Estado:</label>
                        </div>
                        <div class="col-auto">
                            <label class="form-control" htmlFor="estado">{estado}</label>
                        </div>
                    </div>
                    <div class="col-5">
                        <div>
                            <label htmlFor="cep">CEP:</label>
                        </div>
                        <div class="col-5">
                            <label class="form-control" htmlFor="cep">{cep}</label>
                        </div>
                    </div>
                    <div class="col-8 mb-3">
                        <div>
                            <label htmlFor="complemento">Complemento:</label>
                        </div>
                        <div class="col-5">
                            <label class="form-control" htmlFor="complemento">{complemento}</label>
                        </div>
                    </div>

                    <div class="col-auto">
                            <label htmlFor="proprietario">Proprietario:</label>
                            <label class="form-control" htmlFor="proprietario">{proprietario.nome}</label>
                        </div>
                </div>
                <div class="row justify-content-around">
                        <div class="col-3">
                            <div>
                                <label htmlFor="preco">Preco:</label>
                            </div>
                            <div class="col-auto">
                                <label class="form-control" htmlFor="preco">{preco}</label>
                            </div>
                        </div>
                        <div class="col-3">
                            <label htmlFor="tipo">Tipo:</label>
                            <div>
                                {getTipo(tipo)}
                            </div>
                        </div>
                    <div class="col-2">
                        <label htmlFor="tipo">Financia:</label>
                        {getFinancia(financia)}
                    </div>
                    <div class="col-3 ">
                        <label htmlFor="tipo">ALUGAR/VENDER:</label>
                        {getAlugando(alugando)}
                    </div>
                    <div class="row align-items-center">
                        <div class="col-3 mb-2">
                            <div>
                                <label htmlFor="comodos">Comodos:</label>
                            </div>
                            <div>
                                <label class="form-control" htmlFor="comodos">{comodos}</label>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <label htmlFor="area">Area:</label>
                            </div>
                            <div>
                                <label class="form-control">{area}</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <label htmlFor="descricao">Descricao:</label>
                            </div>
                            <div>
                                <label class="form-control" htmlFor="descricao">{descricao}</label>
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