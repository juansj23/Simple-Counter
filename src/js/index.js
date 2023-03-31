//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


const SecondsCounter = (props) =>{
	return(
		<div className="container text-center bg-dark text-white col-6 rounded-3 mt-5">
			<div className="row row-cols rounded-3 p-1 fs-1 justify-content-center ">
				<div className="col-2 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10"><i className="fa-sharp fa-regular fa-clock"></i></div>
                <div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">{props.digitoSeis % 10}</div>
				<div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">{props.digitoCinco % 10}</div>
				<div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">{props.digitoCuatro % 10}</div>
				<div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">{props.digitoTres % 10}</div>
				<div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">{props.digitoDos % 10}</div>
				<div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">{props.digitoUno % 10}</div>
  			</div>	
		</div>
	)
}
//Variable contadora de segundos
let seconds = 0;

// Funcion que cuenta todos los segundos y los agrega cada digito
setInterval(()=>{
    const seis = Math.floor(seconds/10000);
    const cinco = Math.floor(seconds/10000);
    const cuatro = Math.floor(seconds/1000);
    const tres = Math.floor(seconds/100);
    const dos = Math.floor(seconds/10);
    const uno = Math.floor(seconds/1);
    seconds++;
    ReactDOM.render(<SecondsCounter digitoUno = {uno} digitoDos = {dos} digitoTres ={tres} digitoCuatro ={cuatro} digitoCinco={cinco} digitoSeis={seis}/>, document.querySelector("#app"));
},1000);

