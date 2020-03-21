import React from 'react'; //biblioteca de interfaces
import ReactDOM from 'react-dom'; //biblioteca de interfaz para navegador
import './index.css'; //importo desde css a js - gracias a webpack - también imagenes, iconos etc
import App from './App';
import * as serviceWorker from './serviceWorker'; //característica: progessive web app || Aplicaciones con nuevas características. Ej:ejecución offline


//hace el render de el componente <App> en donde? en root (es lo que obtiene por el get element)
ReactDOM.render(<App />, document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
