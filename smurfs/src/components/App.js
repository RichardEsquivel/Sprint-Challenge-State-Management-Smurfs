import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSmurf, buildVillage } from '../actions';
import "./App.css";

function App(props) {
	console.log(props);
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			{props.loading && <h1>Finding the blue ones!</h1>}
			{props.smurfs && (
				<div> <h1>{props.smurfs.name}</h1>
					<h2>{props.smurfs.age}</h2>
					<h2>{props.smurfs.height}</h2>
				</div>
			)}

			<form onSubmit={props.buildVillage}>
				<input type="text"
					value={props.smurfs.name}
					name="name"
					place="Name your blue One"
				/>
			</form>

			<button onClick={props.getSmurf}>Get YOU SOME SMURFS.</button>
		</div>
	);

}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		error: state.error,
		loading: state.loading
	}
}

export default connect(mapStateToProps, { getSmurf, buildVillage })(App);
