import { CALL_API } from "../../middlewares/api";

export const BUTTON_CLICK = "BUTTON_CLICK";

export const handleClick = data => {
  console.log(data);
  return {
    type: BUTTON_CLICK,
    data
  };
};

// state.dispatch(dispatch, getSate)(data)(compexSample)
/* 

return function dispatch() {
  return function(this, getState) {
    return function(payload) {
      return function(callback) {
        
      }
    }
  }
}


*/

export const complexSample = data => (dispatch, getState) => {
  if (!valid(data)) {
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: {
        error: true,
        message: "..."
      }
    });

    return;
  }

  dispatch({
    type: CALL_API,
    payload: {
      url: "/complexUrl",
      params: data,
      method: "POST"
    }
  }).then(response => {
    if (!valid2(response, getState().complex.type)) {
      dispatch({
        type: "SHOW_NOTIFICATION",
        payload: {
          error: true,
          message: "...213123213"
        }
      });

      return;
    }

    dispatch({
      type: "UPDATE_DATA",
      payload: response
    });
  });
};
