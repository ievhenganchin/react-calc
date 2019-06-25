import { CALL_API } from "../../middlewares/api";

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_RESPONSE = 'GET_USERS_RESPONSE';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export const handleCommandClick = (data) => dispatch => {
  dispatch({
    type: CALL_API,
    payload: Object.assign({}, data, { types: [GET_USERS_REQUEST, GET_USERS_RESPONSE, GET_USERS_ERROR] })
  }).then(response => {

  });
}
