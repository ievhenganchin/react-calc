import { BUTTON_CLICK } from "../components/Number/actions";
import {
  BUTTON_COMMAND_CLICK,
  EQUAL_CLICK,
  CLEAR_CLICK
} from "../components/Command/actions";
import {
  LOG_DATA_REQUEST,
  LOG_DATA_ERROR,
  LOG_DATA_RESPONSE
} from "../actions";

const initialState = {
  first: "",
  second: "",
  operation: "",
  isLoading: false
};

const formatResult = state => ({
  ...state,
  result: state.first + state.operation + state.second
});

export default (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICK: {
      const result = Object.assign({}, state);
      if (!state.operation) {
        result.first += action.data;
        return formatResult(result);
      }

      result.second += action.data;
      return formatResult(result);
    }
    case BUTTON_COMMAND_CLICK: {
      const result = Object.assign({}, state, { operation: action.data });
      return formatResult(result);
    }
    case EQUAL_CLICK: {
      return Object.assign(
        {},
        { result: eval(state.result) },
        { ...initialState }
      );
    }
    case CLEAR_CLICK: {
      return initialState;
    }
    case LOG_DATA_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOG_DATA_ERROR:
    case LOG_DATA_RESPONSE: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};
