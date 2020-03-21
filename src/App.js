import React from 'react'; //lo importamos para crear interfaces
//import logo from './logo.svg'; //importa el logo 
import './App.css'; //importo el css

//funcion App devuelve lo que queremos renderizar --> html... :O NO! es JSX
//usamos className en vez de class ojo! no es html

/* 
function Helloworld(props){
  return (
  <div id="hello">
        <h3>{props.sub}</h3>
        {props.mytext}
      </div>
    
  )
} */

class Helloworld extends React.Component{
  
  state = {
    show: true

  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }


  render (){
    if(this.state.show){
    return(
      <div id="hello">
        <h3>{this.props.sub}</h3>
        {this.props.mytext}
        <button onClick={this.toggleShow}> Toggle Show</button>
      </div>
      
    )} else {return <h1>no hay elementos
                      <button onClick={this.toggleShow} >Toggle Show</button>
                    </h1>}
  }

}

//formato función:
function App() {
  return (
    <div>
      This is my componente: <Helloworld mytext="Hello Gente" sub = "lorem"/>
      <Helloworld mytext="Ke Onda!"/>
      <Helloworld mytext = "Adios"/>
    </div>
  );
}

export default App;
