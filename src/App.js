import React, {Component} from 'react'; //lo importamos para crear interfaces
//import logo from './logo.svg'; //importa el logo 
import './App.css'; //importo el css

//Componentes:
import tasks from './ejemplos/task.json'; //importo datos de prueba!
import Tasks from './components/tasks'; // importo el componente de las tareas 
import TaskForm from './components/taskform' //importo formulario
import Posts from './components/Posts';

//Componente de ruteador para web:
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class App extends Component{
  //meto los datos en un estado:

  state = {
    tasks: tasks
  }

  //esta función va acá porque es la forma de traer la funcion ingresaa nueva en taskform
  //la mando como parámetro a task form!
  
  addTask = (title,desc) => {
    let newTask = {
        title: title,
        desc: desc,
        id: this.state.tasks.length //usamos el tamaño para hacerlo avanzar!
    }
      //IMPORTANTE: uso el setState para modificar el state:
    this.setState({
      //estos 3 punos indican, sumar algo a los tasks a demás de los que tenemos: 
      tasks: [...this.state.tasks, newTask]
    })
  }

  //sacar tareas del state:
  //filter: devuelve el array con datos filtrados -->
  //-->ejecutamos una funcion que recorre y filtra los diferentes al id pasado, y eso lo seteo :)
  //ojo, no estoy trabajando sobre el back, solo lo estoy ocultando temporal, si refresco vuelve
  //esto se lo pasamos a task.js que es el componente que tiene el boton!! --> se lo tengo que pasar a task.js y luego a tasks.js
  deleteTask = (id) =>{
 const newTask = this.state.tasks.filter(tasks => tasks.id !== id)
 this.setState({tasks: newTask})
  }


  checkDone = (id) => {
   const newTasks = this.state.tasks.map(task =>{ //mapea buscando, if lo encuentra...
      if(task.id===id){
        task.done = !task.done //cambia a estado opuesto
      }
      return task
    });
    this.setState({tasks: newTasks})
  }


  render(){
    //acá llamo al componente, que es el que manipula todo, llevándose los datos 
    //paso una función como propiedad al formulario :O
    //concepto pra revisar: redux, en vez de tener que ir pasando las funciones. 
    //en route path es la ruta que va a ver el usuario:
    //el componente Posts lo estoy llamando directo desde route :)
    //el exact path es para que en /post no muestre el de / y el de barra sea solo en el EXACT!
    //link es cmo el <a>
    return <div>
      <Router>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/posts'>Ver Posteos</Link>

            <Route exact path="/" render={()=>{
               return <div>
                    <TaskForm addTask = {this.addTask}/>
                    <Tasks tasks={this.state.tasks}
                          deleteTask={this.deleteTask} 
                        checkDone={this.checkDone}/>  
                </div>
              }}>
             </Route>
          <Route path="/posts" component ={Posts}/>
           
    </Router>


    </div>
  }

}

export default App;
