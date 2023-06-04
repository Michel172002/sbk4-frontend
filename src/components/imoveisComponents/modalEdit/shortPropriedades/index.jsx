 import { useState } from "react";
import {Containner} from "./styled.js";
import { useEffect } from "react";
import sbk4Fetch from "../../../../axios/config.js";
function ShortPropriedadesEdit({imovelProp}){

    const [proprietarios, setProprietarios] = useState([])
    const getProprietarios = async() => {
        try{
            const response = await sbk4Fetch.get("/proprietarios/")
            const data = response.data
            setProprietarios(data)
          }catch(error){
            console.log(error)
        }
    }

    const [proprietario, setProprietario] = useState("")
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

    const editImovel = async(e) => {
        const imovel = {proprietario, tipo, preco, alugando, financia, area, rua, bairro, cidade, numero, complemento, estado, cep, comodos, descricao}       
        try{
            await sbk4Fetch.put(`/imoveis/${imovelProp.id}/`, imovel)
        }catch(error){
            console.log(error);
        }
    }

    const getImovel = async(imovelId) => {
        try {
            const response = await sbk4Fetch.get(`/imoveis/${imovelId}/`)
            const data = response.data
            setProprietario(data.proprietario)
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

    useEffect(() => {
        if(imovelProp){
            getImovel(imovelProp.id)
        }
        getProprietarios()
    }, [imovelProp])

    return(
        <Containner>
           <form class="needs-validation" novalidate onSubmit={(e) => editImovel(e)}>
            <div class="col align-self-center">
                <div class="row justify-content-around">
                    <div class="col-8">
                        <div>
                            <label htmlFor="nome">Rua</label>
                        </div>
                        <div>
                            <input 
                            class="form-control" 
                            type={"text"}
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div class="col-2 mb-2">
                        <div>
                            <label htmlFor="numero">Numero</label>
                        </div>
                        <div>
                            <input 
                            class="form-control" 
                            type={"text"}
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div class="col-auto mb-2">
                        <div>
                            <label htmlFor="bairro">Bairro</label>
                        </div>
                        <div>
                            <input 
                            class="form-control" 
                            type={"text"}
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div class="col-auto mb-2">
                        <div>
                            <label htmlFor="estado">Cidade</label>
                        </div>
                        <div>
                            <input 
                            class="form-control" 
                            type={"text"}
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            ></input>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-auto mb-2">
                        <div>
                            <label htmlFor="estado">Estado</label>
                        </div>
                        <div class="col-auto">
                            <input 
                            class="form-control" 
                            type={"text"}
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div>
                            <label htmlFor="cep">CEP</label>
                        </div>
                        <div class="col-5">
                            <input 
                            class="form-control" 
                            type={"text"}
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div class="col-8 mb-3">
                        <div>
                            <label htmlFor="complemento">Complemento</label>
                        </div>
                        <div class="col-5">
                            <input 
                            class="form-control" 
                            type={"text"}
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div class="col-auto">
                            <label htmlFor="proprietario">Proprietario</label>
                            <select class="form-control" name="idProp" id="idProp" value={proprietario} onChange={(e) => setProprietario(e.target.value)}>
                                {proprietarios.length === 0 ? (<option value={null}>Sem Proprietarios</option>): (
                                    proprietarios.map((proprietario) => (
                                        <option value={proprietario.id}>{proprietario.nome}</option>
                                    ))
                                )}
                            </select>
                        </div>
                </div>
                <div class="row justify-content-around">
                        <div class="col-3">
                            <div>
                                <label htmlFor="preco">Preco</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                class="form-control" 
                                type={"number"}
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div class="col-3">
                            <label htmlFor="tipo">Tipo</label>
                            <div>
                                <select class="form-control" name="tipo" id="selectTipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                    <option value={"CASA"}>Casa</option>
                                    <option value={"APARTAMENTO"}>Apartamento</option>
                                    <option value={"LOTE"}>Lote</option>
                                    <option value={"SALA COMERCIAL"}>Sala Comercial</option>
                                    <option value={"KIT NET"}>Kit Net</option>
                                    <option value={"CHACARA"}>Chacara</option>
                                    <option value={"TERRENO"}>Terreno</option>
                                </select>
                            </div>
                        </div>
                    <div class="col-2">
                            <label htmlFor="tipo">Financia</label>
                                <div>
                                    <input type="radio" id="sim" name="financiaRadio" value={"sim"} onChange={() => setFinancia(true)}></input>
                                    <label htmlFor="sim">Sim</label>
                                </div>
                                <div>
                                    <input type="radio" id="nao" name="financiaRadio" value={"nao"} onChange={() => setFinancia(false)}></input>
                                    <label htmlFor="nao">Não</label>
                                </div>
                        </div>
                    <div class="col-3 ">
                            <label htmlFor="tipo">ALUGAR/VENDER</label>
                                <div>
                                    <input type="radio" id="alugar" name="tipoRadio" value={"alugar"} onChange={() => setAlugando(true)}></input>
                                    <label htmlFor="alugar">Alugar</label>
                                </div>
                                <div>
                                    <input type="radio" id="comprar" name="tipoRadio" value={"comprar"} onChange={() => setAlugando(false)}></input>
                                    <label htmlFor="comprar">Vender</label>
                                </div>
                        </div>
                    
                    <div class="row align-items-center">
                        <div class="col-3 mb-2">
                            <div>
                                <label htmlFor="email">Comodos</label>
                            </div>
                            <div>
                                <input 
                                class="form-control" 
                                type={"text"}
                                value={comodos}
                                onChange={(e) => setComodos(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <label htmlFor="email">Area</label>
                            </div>
                            <div>
                                <input 
                                class="form-control" 
                                type={"text"}
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <label htmlFor="email">Descricao</label>
                            </div>
                            <div>
                                <input 
                                class="form-control" 
                                type={"text"}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                ></input>
                            </div>
                        </div>
                    </div>
                        <div class="row align-items-center">
                        <div class="col-auto">
                            <input class="btn btn-success btn-lg" type={"submit"}/>
                        </div>
                    </div>
                </div>
                </div>
           </form>
        </Containner>
    )
}
export default ShortPropriedadesEdit