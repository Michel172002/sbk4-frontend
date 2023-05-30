import {Containner} from "./styled.js";
function ShortPropriedades(){

    return(
        <Containner>
           <form method="post" class="needs-validation" novalidate>
            <div class="col align-self-center">
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <div>
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div>
                            <input class="form-control" type={"text"}></input>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div>
                            <label htmlFor="nascimento">Data de Nascimento</label>
                        </div>
                        <div>
                            <input class="form-control" type={"date"}></input>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-auto mb-2">
                        <div>
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                        <div class="col-auto">
                            <input class="form-control" type={"number"}></input>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div class="col-auto">
                            <input class="form-control" type={"email"}></input>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <label htmlFor="sexo">Sexo</label>
                        <div>
                            <select class="form-control" name="sexo" id="selectSexo">
                                <option value={1}>Homem</option>
                                <option value={0}>Mulher</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-auto mb-3">
                        <div class="col-3">
                            <select class="form-control" name="indentificacao" id="selectDoc">
                                <option value={1}>RG</option>
                                <option value={2}>CNH</option>
                                <option value={3}>CPF</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <input class="form-control" type={"number"}></input>
                        </div>
                    </div>
                <div class="row justify-content-around">
                    <div class="col-auto">
                        <label htmlFor="procura">Procura</label>
                        <div>
                            <input type={"checkbox"} id="checkboxCasa" name="casa" value={"casa"}></input>
                            <label htmlFor="casa">Casa</label>
                        </div>
                        <div>
                            <input type={"checkbox"} id="checkboxAp" name="apartamento" value={"apartamento"}></input>
                            <label htmlFor="apartamento">Apartamento</label>
                        </div>
                        <div>
                            <input type={"checkbox"} id="checkboxTerreno" name="terreno" value={"terreno"}></input>
                            <label htmlFor="terreno">Terreno</label>
                        </div>
                        <div>
                            <input type={"checkbox"} id="checkboxLote" name="lote" value={"lote"}></input>
                            <label htmlFor="lote">Lote</label>
                        </div>
                        <div>
                            <input type={"checkbox"} id="checkboxChacara" name="chacara" value={"chacara"}></input>
                            <label htmlFor="chacara">Chacara</label>
                        </div>
                    </div> 
                    
                    <div class="col-auto mb-3">
                        <div>
                            <div>
                                <label htmlFor="email">Comodos</label>
                            </div>
                            <div class="col-auto mb-2">
                                <input class="form-control" type={"text"}></input>
                            </div>
                        </div>
                        <div class="row align-items-center">
                        <div class="col-auto offset-md-3">
                            <label htmlFor="tipo">Tipo</label>
                            <div>
                                <div>
                                    <input type="radio" id="alugar" name="tipoRadio" value={"alugar"}></input>
                                    <label htmlFor="alugar">Alugar</label>
                                </div>
                                <div>
                                    <input type="radio" id="comprar" name="tipoRadio" value={"comprar"}></input>
                                    <label htmlFor="comprar">Comprar</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <input class="btn btn-success btn-lg" type={"submit"}/>
                        </div>
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