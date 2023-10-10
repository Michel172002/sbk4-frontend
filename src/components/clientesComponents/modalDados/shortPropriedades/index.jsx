import { useEffect, useState } from "react";
import { Containner } from "./styled.js";
import sbk4Fetch from "../../../../axios/config.js";

const ShortPropriedadesDados = ({ clienteProp }) => {
  const [nome, setNome] = useState("");
  const [dataNasm, setDataNasm] = useState("");
  const [sexo, setSexo] = useState(true);
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [identificacao, setTipoDoc] = useState("");
  const [identificacaoNumber, setNumDoc] = useState("");
  const [observacao, setobservacao] = useState("");
  const [procTipo, setProcTipo] = useState("");
  const [procAlugando, setAlugar] = useState("");
  const [procComodos, setComodos] = useState("");

  const getCliente = async (clienteId) => {
    try {
      const response = await sbk4Fetch.get(`/cliente/${clienteId}`);
      const data = response.data;
      setNome(data.nome);
      setDataNasm(data.dataNasm);
      setSexo(data.sexo);
      setTelefone(data.telefone);
      setEmail(data.email);
      setTipoDoc(data.identificacao);
      setNumDoc(data.identificacaoNumber);
      setobservacao(data.observacao);
      setProcTipo(data.procTipo);
      setAlugar(data.procAlugando);
      setComodos(data.procComodos);
    } catch (error) {
      console.log(error);
    }
  };

  const getSexo = (sexo) => {
    if (sexo) {
      return <label class="form-control">Homem</label>;
    } else {
      return <label class="form-control">Mulher</label>;
    }
  };

  const getTipoDoc = (identificacao) => {
    if (identificacao === "RG") {
      return <label>RG:</label>;
    }
    if (identificacao === "CPF") {
      return <label>CPF:</label>;
    }
    if (identificacao === "CNPJ") {
      return <label>CNPJ:</label>;
    }
  };

  const getTipoProc = (procAlugando) => {
    if (procAlugando) {
      return (
        <label class="form-control" htmlFor="tipo_proc">
          Alugar
        </label>
      );
    } else {
      return (
        <label class="form-control" htmlFor="tipo_proc">
          Comprar
        </label>
      );
    }
  };

  useEffect(() => {
    if (clienteProp) {
      getCliente(clienteProp.id);
    }
  }, [clienteProp]);

  return (
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
                <label class="form-control" htmlFor="nascimento">
                  {dataNasm}
                </label>
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-auto mb-2">
              <div>
                <label htmlFor="telefone">Telefone:</label>
              </div>
              <div class="col-auto">
                <label class="form-control" htmlFor="telefone">
                  {telefone}
                </label>
              </div>
            </div>
            <div class="col-auto">
              <div>
                <label htmlFor="email">Email:</label>
              </div>
              <div class="col-auto">
                <label class="form-control" htmlFor="email">
                  {email}
                </label>
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-auto">
              <label htmlFor="sexo">Sexo:</label>
              <div>{getSexo(sexo)}</div>
            </div>
            <div class="col-auto mb-3">
              <div class="col-3">{getTipoDoc(identificacao)}</div>
              <div class="col-auto">
                <label class="form-control" htmlFor="identificacaoNumber">
                  {identificacaoNumber}
                </label>
              </div>
            </div>
            <div class="row justify-content-around">
              <div class="col-auto">
                <label htmlFor="procura">Procurando:</label>
                <label class="form-control" htmlFor="procura">
                  {procTipo}
                </label>
              </div>
              <div class="col-auto mb-3">
                <div>
                  <div>
                    <label htmlFor="comodos">Comodos:</label>
                  </div>
                  <div class="col-auto mb-2">
                    <label class="form-control" htmlFor="comodos">
                      {procComodos}
                    </label>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-auto offset-md-3">
                    <label htmlFor="tipo">Tipo:</label>
                    <div>{getTipoProc(procAlugando)}</div>
                  </div>
                  <label>observacaoervações</label>
                  <label class="form-control" htmlFor="observacao">
                    {observacao}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Containner>
  );
};
export default ShortPropriedadesDados;
