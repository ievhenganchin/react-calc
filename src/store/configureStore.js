import { applyMiddleware, compose, createStore } from "redux";

import rootReducer from "./reducers";
import {api} from "../middlewares/api";

export default function configureStore(preloadedState) {
  const middlewares = [
    api
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
