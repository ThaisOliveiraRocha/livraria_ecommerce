import { createStore, compose, applyMiddleware } from "redux";
import { Reducers } from "./reducers";
import thunk from "redux-thunk";

export default createStore(
    Reducers,
    undefined,
    compose(
      applyMiddleware(thunk),
      typeof window === "object" &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );