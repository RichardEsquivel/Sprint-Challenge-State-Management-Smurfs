import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions';


const initialState = {
	smurfs: null,
	error: "",
	loading: false
};

const reducer = (state = initialState, action) => {
	console.log("I clicked the button!", action);
	switch (action.type) {
		case FETCH_SMURF_START:
			return {
				...state,
				error: "",
				loading: true
			};
		case FETCH_SMURF_SUCCESS:
			return {
				...state,
				error: "",
				loading: false,
				smurfs: action.payload
			}
		case FETCH_SMURF_FAILURE:
			return {
				...state,
				error: action.payload,
				loading: false,
				smurfs: null
			}
		default:
			return state;
	}
}

export default reducer;