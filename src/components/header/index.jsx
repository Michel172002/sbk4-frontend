import { Containner } from "./styled.js"

function Header(){
var page=window.location.pathname;
if(page=="/"){
    page="Informações"
}
var pageReplace=page.replace(/^\//,"")
    return(
        <div>
            <Containner>
                <h3>{pageReplace}</h3>
            </Containner>
        </div>
    )
}
export default Header