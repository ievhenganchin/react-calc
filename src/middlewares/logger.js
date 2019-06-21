export const logger = store => next => action => {
  // log action
  fetch("/logMessage", {
    method: "POST",
    body: action,
    headers: {
      // auth headers
    }
  });

  next(action);
};
