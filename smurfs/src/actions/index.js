const FETCH_SMURF_START = "FETCH_SMURF_START";
const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
import axios from 'axios';

export const getSmurf = () => {
	return dispatch => {
		dispatch({ type: FETCH_SMURF_START });
		axios.get("http://localhost:3333/smurfs")
			.then(response => dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data }))
			.catch(error => dispatch({ type: FETCH_SMURF_FAILURE, payload: error.response }))
		console.log(response.data);
	}
}