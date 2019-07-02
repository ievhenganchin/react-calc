export const CALL_API = "CALL_API";

export const api = ({dispatch}) => next => action => {
  if (action.type !== CALL_API) {
    next(action);

    return;
  }

  if (!action.payload || !(action.payload.types instanceof Array) || action.payload.types.length !== 3) {
    return;
  }

  const [REQUEST, RESPONSE, ERROR] = action.payload.types;

  const initParams = {
    method: action.payload.method,
    body: action.payload.params,
    headers: {}
  };

  dispatch({ type: REQUEST });

  return new Promise((resolve, reject) => {
    fetch(action.payload.url, initParams)
      .then(response => {
        // prepare response
        // <response><error>1</error></response>

        if (response.error) {
          // { error: true, message: '....' }
          dispatch({ type: ERROR, payload: response });
          reject(response);

          return;
        }

        response.json().then(payload => {
          dispatch({ type: RESPONSE, payload });
          resolve(payload);
        });
      })
      .catch(error => {
        // handle errors
        reject(error);
      });
  });
};
