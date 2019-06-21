export const CALL_API = "CALL_API";

// api(store)(next)(action)

// Thunks
// Sagas
// Callbacks
export const api = store => next => action => {
  if (action.type !== CALL_API) {
    next(action);
  }

  const [REQUEST, RESPONSE, ERROR] = action.payload.types;

  const initParams = {
    method: action.payload.method,
    body: action.payload.params,
    headers: {
      // auth
      // cors
      // request / response type
      // etc
    }
  };

  store.dispatch({ type: REQUEST }); // +params

  return new Promise((resolve, reject) => {
    fetch(action.payload.url, initParams)
      .then(response => {
        // prepare response
        // <response><error>1</error></response>

        if (response.error) {
          // { error: true, message: '....' }
          store.dispatch({ type: ERROR, payload: response });
          reject(response);

          return;
        }

        store.dispatch({ type: RESPONSE, payload: response });
        resolve(response);
      })
      .catch(error => {
        // handle errors
        reject(error);
      });
  });
};

/*
  dispatch({ type: CALL_API, payload: {
    url: '/users',
    method: 'GET',
    params: null,
    type: ['GET_USERS_REQUEST', 'GET_USERS_RESPONSE', 'GET_USERS_ERROR']
  }}).then((response => {// some additional logic}))
*/

/* apiHelper('/users', null, 'GET', 
  ['GET_USERS_REQUEST', 'GET_USERS_RESPONSE', 'GET_USERS_ERROR'])
  .then(response => { // some additional logic })
  .then(response => { // refresh data })
  .then(response => { // log info })
*/

const add = first => {
  return second => {
    this.log("Added");
    return first + second;
  };
};

// add(5, 10)
// add(5)(10)
