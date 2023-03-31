import React from "react"

//Este es el diseño de contador solo usando Bootstrap

const Timer = () =>{
	return(
		<div className="container text-center bg-dark text-white col-6 rounded-3">
			<div className="row row-cols rounded-3 p-1 fs-1 justify-content-center ">
				<div className="col-2 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10"><i className="fa-sharp fa-regular fa-clock"></i></div>
				<div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">0</div>
				<div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">0</div>
				<div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">0</div>
				<div className="col-1 rounded-3 border border-top-0 border-bottom-0 border-2 border-secondary m-1 p-2 bg-secondary bg-opacity-10">0</div>
  			</div>	
		</div>
	)
}	

export default Timer;