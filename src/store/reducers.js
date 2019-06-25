import { GET_USERS_REQUEST, GET_USERS_RESPONSE } from "../components/Command/actions";
import { CALL_API } from "../middlewares/api";

const initialState = {
  first: "",
  second: "",
  operation: ""
};

const formatResult = state => ({
  ...state,
  result: state.first + state.operation + state.second
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CALL_API: {
      console.log('Middleware was triggered');
      return state;
    }
    case GET_USERS_REQUEST: {
      console.log('Request started');
      return state;
    }
    case GET_USERS_RESPONSE: {
      console.log('Request ended');
      console.log('Result: ', action.payload);
      return state;
    }
    default:
      return state;
  }
};
