import { Containner } from "./styled.js"

function Header(){
var page=window.location.pathname;
if(page=="/"){
    page="Home"
}
var pageReplace=page.replace(/^\//,"")
    return(
        <div>
            <Containner className="shadow d-flex align-items-center justify-content-center">
                <h3>{pageReplace}</h3>
            </Containner>
        </div>
    )
}
export default Header
