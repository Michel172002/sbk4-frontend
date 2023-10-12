import styled from 'styled-components';

export const Containner = styled.div`
// margin-top: -4vh;
position: absolute;
width: calc(100% - 300px);
margin-left: 300px;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

span{
    color: blue;
}
ul{
    list-style-type: none;
    font-size: 22px;
    // margin: 2vw;
    padding: 0;
    // margin-top: 4vh;
    text-align: right;
    margin: .5rem;
}
li{
  //  margin-top:2vh;
    display: inline-block;
    margin-left: 1vw;

}
h3{
  margin: 2vh
}
button{
  // margin-top: 1rem;
  background: linear-gradient(45deg, #0F1A2C, #1E2F46);
  color: #CACACA;
}

button:hover {
  background-color: rgba(302, 302, 302, 0.1);
  color: white;
}
`
