//importamos Posts desde una api
import React, { Component } from 'react'

export default class Posts extends Component {

    //obtención de datos previo a cargar la app: life cicle methods
    //componentDidMount --> cuando el componente fue cargado en pantalla (como el on load) --> se ejecuta solo!
    //fetch --> api del navegador 
    //async y await --> avisa q este codigo va a tomar tiempo
    //En res guardo la respuesta

   async componentDidMount(){
    const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
        
    }


    render() {
        return (
            <div>
                <h1>Posts</h1>
            </div>
        )
    }
}


