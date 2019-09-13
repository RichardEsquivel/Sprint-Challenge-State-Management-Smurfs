import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";

function App(props) {
	console.log(props);
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>

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

export default connect(mapStateToProps, null)(App);
