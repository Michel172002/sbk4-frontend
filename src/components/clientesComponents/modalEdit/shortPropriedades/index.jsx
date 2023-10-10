import { useEffect, useState } from "react";
import {Containner} from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";

const ShortPropriedadesEdit= ({clienteProp}) => {
  const [nome, setNome] = useState("")
  const [dataNas, setDataNasm] = useState("")
  const [sexo, setSexo] = useState(true)
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [identificacao, setTipoDoc] = useState("")
  const [identificacaoNumber, setNumDoc] = useState("")
  const [observacao, setObservacao] = useState("")
  const [procTipo, setProcTipo] = useState("")
  const [procAlugando, setAlugar] = useState(true)
  const [procComodos, setComodos] = useState("")

    const getCliente = async(clienteId) => {
        try {
            const response = await sbk4Fetch.get(`/cliente/${clienteId}`)
            const data = response.data
            setNome(data.nome)
            setDataNasm(data.dataNasm)
            setTelefone(data.telefone)
            setEmail(data.email)
            setTipoDoc(data.identificacao)
            setNumDoc(data.identificacaoNumber)
            setObservacao(data.observacao)
            setProcTipo(data.procTipo)
            setAlugar(data.procAlugando)
            setComodos(data.procComodos)
        } catch (error) {
            console.log(error);
        }
    }

    const editCliente = async(e) => {
        e.preventDefault()
        const clienteEditado = {nome, dataNas, sexo, telefone, email, identificacao, identificacaoNumber, observacao, procTipo, procAlugando, procComodos, ativo: true}
        try {
            await sbk4Fetch.put(`/cliente/${clienteProp.id}`, clienteEditado)
        } catch (error) {
            console.log(error);
        }
        location.reload();
    }

    useEffect(() => {
        if(clienteProp){
            getCliente(clienteProp.id)
        }
    }, [clienteProp])

    return(
        <Containner>
           <form class="needs-validation" novalidate onSubmit={(e) => editCliente(e)}>
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
                            value={nome}
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
                            value={dataNas}
                            onChange={(e) => setDataNasm(e.target.value)}
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
                            value={telefone}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <label htmlFor="sexo">Sexo</label>
                        <div>
                            <select class="form-control" name="sexo" id="selectSexo" value={sexo} onChange={(e) => setSexo(e.target.value === "true")}>
                                <option value={"true"}>Homem</option>
                                <option value={"false"}>Mulher</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-auto mb-3">
                        <div class="col-3">
                            <select class="form-control" name="indentificacao" id="selectDoc" value={identificacao} onChange={(e) => setTipoDoc(e.target.value)}>
                                <option value={"RG"} >RG</option>
                                <option value={"CNH"} >CNH</option>
                                <option value={"CNPJ"} >CNPJ</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <input
                            class="form-control"
                            type={"number"}
                            value={identificacaoNumber}
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
                        value={procTipo}
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
                                value={procComodos}
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
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
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
export default ShortPropriedadesEdit
