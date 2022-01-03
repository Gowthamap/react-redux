import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
