import React, {Component} from 'react';


export default class TaskForm extends Component {

//Creo estados para cada input | los pongo vacios pq asi es al inicio de la app

state ={
    title: '',
    desc:''
}

onSubmit = (e) => {
    e.preventDefault() //Evitamos carga automática y refresh
     //ejecuto la función que traje como propiedad:
    this.props.addTask(this.state.title,this.state.desc);
}

onChangeInput = (e) =>{
    
    this.setState({
    [e.target.name] : e.target.value
    })
}

    render (){
       
        
return (
    <form onSubmit={this.onSubmit}>
        <input 
        name ='title'
        type='text' 
        placeholder = 'escribe una tarea' 
        onChange={this.onChangeInput} 
        value={this.state.title}/>
        <br/>
        <br/>
        <textarea
        name = 'desc'  
        placeholder = 'escriba descripción'
        onChange={this.onChangeInput}
        value={this.state.desc} />
        <input type='submit'/>
    </form>
)


    }
}


