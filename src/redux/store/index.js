import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localStorageMiddleware = (store) => {
  return (next) => (action) => {
    const result = next(action);
    try {
      localStorage.setItem("myNotes", JSON.stringify(store.getState()));
    } catch (e) {
      console.log("Error while saving in localStorage", e);
    }
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem("myNotes") !== null) {
    return JSON.parse(localStorage.getItem("myNotes"));
  }
  return undefined;
};

export const store = createStore(
  reducers,
  reHydrateStore(),
  composeEnhancers(applyMiddleware(localStorageMiddleware, thunk))
);
