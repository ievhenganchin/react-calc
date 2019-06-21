import { CALL_API } from "./middlewares/api";

export const LOG_DATA_REQUEST = "LOG_DATA_REQUEST";
export const LOG_DATA_RESPONSE = "LOG_DATA_RESPONSE";
export const LOG_DATA_ERROR = "LOG_DATA_ERROR";

export const logData = data => ({
  type: CALL_API,
  payload: {
    types: [LOG_DATA_REQUEST, LOG_DATA_RESPONSE, LOG_DATA_ERROR],
    url: "/log",
    method: "POST",
    params: data
  }
});
