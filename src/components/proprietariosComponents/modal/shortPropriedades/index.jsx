import {Containner} from "./styled.js";
function ShortPropriedades(){

    return(
        <Containner>
           <form method="post" class="needs-validation" novalidate>
            <div class="col align-self-center">
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input class="form-control" type={"text"}></input>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="nascimento">Data de Nascimento</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input class="form-control" type={"date"}></input>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto mb-3">
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input class="form-control" type={"number"}></input>
                    </div>
                    <div class="col-auto mb-3">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div class="col-auto mb-3">
                        <input class="form-control" type={"email"}></input>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <label htmlFor="sexo">Sexo</label>
                    </div>
                    <div class="col-auto mb-3">
                        <select class="form-control" name="sexo" id="selectSexo">
                            <option value={1}>Homem</option>
                            <option value={0}>Mulher</option>
                        </select>
                    </div>
                    <div class="col-auto mb-3">
                        <select class="form-control" name="indentificacao" id="selectDoc">
                            <option value={1}>RG</option>
                            <option value={2}>CNH</option>
                            <option value={3}>CPF</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <input class="form-control" type={"number"}></input>
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