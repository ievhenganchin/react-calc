export default {
  post: (url, params) => {
    const initParams = {
      method: "POST",
      body: params,
      headers: {
        // auth
        // cors
        // request / response type
        // etc
      }
    };

    return fetch(url, initParams);
  },
  get: (url, ...params) => {}
};

// apiHeader(...).then(response => {...})
