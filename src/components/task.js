import React, {Component} from 'react';
import PropTypes from 'prop-types'; //importo validador de tipos
import  './task.css';  //importo las clases de CSS, luego uso className :) 
//componene de tarea

class Task extends Component {
    
    styleCompleted(){

        return{
            
            fontSize: '20px',
            color: this.props.task.done ? 'green' : 'black', //operador ternario para el condicional
            textDecoration: this.props.task.done ? 'line-through' : 'none' 
        }
    }
    
    render (){
     
        //desestructuro así lo extraigo mas facil:

        const {task} = this.props;

        return <p style={this.styleCompleted()}>
        {task.title} | {task.desc} | {task.done}  
        <input type='checkbox'/>
        <button style={btnDelete}>
            x
        </button>
        
        </p>}

}

//Validador de tipos ingresados!

Task.propTypes = {
    task: PropTypes.object.isRequired
}


//CSS como objetos / variables --> permite cambio dinámico:
const btnDelete ={
    fontSize : '18 px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    }

//Cambio dinámico de estilos dependiendo de done:true/false

export default Task;