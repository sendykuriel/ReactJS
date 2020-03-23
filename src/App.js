import React, {Component} from 'react'; //lo importamos para crear interfaces
//import logo from './logo.svg'; //importa el logo 
import './App.css'; //importo el css

//Componentes:
import tasks from './ejemplos/task.json'; //importo datos de prueba!
import Tasks from './components/tasks'; // importo el componente de las tareas 
import TaskForm from './components/taskform' //importo formulario

class App extends Component{

  //meto los datos en un estado:

  state = {
    tasks: tasks
  }

  //esta función va acá porque es la forma de traer la funcion ingresaa nueva en taskform
  //la mando como parámetro a task form!
  addTask = (title,desc) => {
    const newTasks = {
        title: title,
        desc: desc,
        id: this.state.tasks.length //usamos el tamaño para hacerlo avanzar!
    }
      //IMPORTANTE: uso el setState para modificar el state:
    this.setState(){
      //estos 3 punos indican, sumar algo a los tasks a demás de los que tenemos: 
      tasks [...this.state.tasks, newTask]
    }
    
  }


  render(){
    //acá llamo al componente, que es el que manipula todo, llevándose los datos 
    //paso una función como propiedad al formulario :O
    return <div>
    <TaskForm addTask = {this.addTask}/>
    <Tasks tasks={this.state.tasks}/>   
    </div> 
  }

}
export default App;
