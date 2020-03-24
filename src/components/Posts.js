//importamos Posts desde una api
import React, { Component } from 'react'

export default class Posts extends Component {

    //obtención de datos previo a cargar la app: life cicle methods
    //componentDidMount --> cuando el componente fue cargado en pantalla (como el on load) --> se ejecuta solo!
    //fetch --> api del navegador 
    //async y await --> avisa q este codigo va a tomar tiempo
    //En res guardo la respuesta

    state ={

        posts:[]

    }


   async componentDidMount(){
    const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
    //hay que jesonearlo:
    const data = await res.json()
    //paso los datos al estado:
    this.setState({posts: data})

    }


    render() {
        
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(posts=>{
                        return <div key = {posts.id}>
                            <h1>{posts.title}</h1>
                            <p>{posts.body}</p>
                        </div>
                    })

                }

            </div>
        )
    }
}


