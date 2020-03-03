import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";

export default createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);
