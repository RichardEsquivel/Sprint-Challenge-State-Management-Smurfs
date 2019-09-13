import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions';


const initialState = {
	smurfs: null,
	error: "",
	loading: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURF_START:
			return {
				...state,
				error: "",
				loading: true
			}


		default:
			return state;
	}
}

export default reducer;