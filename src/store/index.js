import { createStore, combineReducers, applyMiddleware } from "redux";

import { postsReducer } from "./posts";

const customThunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }

  return next(action);
};

const reducers = combineReducers({ posts: postsReducer });
const store = createStore(reducers, applyMiddleware(customThunk));

export default store;
