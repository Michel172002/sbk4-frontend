import styled from 'styled-components';

export const Containner = styled.div`
color:red;
width: 90vw;
margin-left: 14vw;
text-align: center;
position: fixed;
margin-top: 2vw;
list-style-type: none;

input{
    width: 20vw;
}
button{
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 30px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 100px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 5px;
}

button:focus {
    border-color: #0f1a2c;
    color: #0f1a2c;
    fill: #0f1a2c;
}

button:hover {
  border-color: #0f1a2c;
  color: #0f1a2c;
  fill: #0f1a2c;
  
}

button:active {
  border-color: #0f1a2c;
  color: #0f1a2c;
  fill: #0f1a2c;
}
`
