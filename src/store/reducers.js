import { BUTTON_CLICK } from "../components/Number/actions";
import {
  BUTTON_COMMAND_CLICK,
  EQUAL_CLICK,
  CLEAR_CLICK
} from "../components/Command/actions";

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
    default:
      return state;
  }
};
