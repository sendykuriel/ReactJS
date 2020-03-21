import React from 'react'; //lo importamos para crear interfaces
//import logo from './logo.svg'; //importa el logo 
import './App.css'; //importo el css

//funcion App devuelve lo que queremos renderizar --> html... :O NO! es JSX
//usamos className en vez de class ojo! no es html


function Helloworld(props){
  return (
    <div id="hello">{props}</div>
  )
}

//formato función:
function App() {
  return (
    <div>This is my componente: <Helloworld mytext="Hello Gente"/><Helloworld/><Helloworld/> </div>
  );
}

export default App;
