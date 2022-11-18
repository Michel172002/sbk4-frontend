import Grid from "./grid/index.jsx"
import { Containner } from "./styled.js"

function Grids(){
    return(
        <div>
            <Containner>
            <div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">
        <div class="col-md-4">
          <div class="card">
            <div class="card-block">
            <h4 class="card-title">Aluguel</h4>
            <Grid/>
            <Grid/>
            <Grid/>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title">Contrato</h4>
              <Grid/>
            <Grid/>
            <Grid/>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title">Agenda</h4>
              <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
             <Grid/>
            <Grid/>
            <Grid/>
            </div>
          </div>
        </div>
      </div><br/>
     
    </div>
  </div>
            </Containner>
        </div>
    )
}
export default Grids