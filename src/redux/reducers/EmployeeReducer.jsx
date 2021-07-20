import { GET_EMPLOYEES_INFO } from "../actions/Types";

const initialState = {
	employees: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_EMPLOYEES_INFO:
			return {
                ...state,
                employees: action.payload

            };
        default:
            return state;
	}
};
