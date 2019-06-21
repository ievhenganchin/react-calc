import { applyMiddleware, compose, createStore } from "redux";
import { api } from "../middlewares/api";
import { logger } from "../middlewares/logger";

import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const middlewares = [logger, api];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
