import React, {Component} from 'react';
import Task from './task';
import PropTypes from 'prop-types'; //importo validador de tipos
//componene de lista de tareas


class Tasks extends Component {

    //con map, recorro el array de datos y los voy generando 
    render (){
        return this.props.tasks.map(task=><Task task={task} key={task.id}/>);     
          }
        }


Tasks.PropTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;