import React, {Component} from 'react'; //lo importamos para crear interfaces
//import logo from './logo.svg'; //importa el logo 
import './App.css'; //importo el css
import tasks from './ejemplos/task.json'; //importo datos de prueba!
import Tasks from './components/tasks'; // importo el componente de las tareas 

class App extends Component{

  //meto los datos en un estado:
  state = {
    tasks: tasks
  }

  render(){
    //acá llamo al componente, que es el que manipula todo, llevándose los datos 
    return <div>
    <Tasks tasks={this.state.tasks}/>   
    </div> 
  }

}
export default App;
