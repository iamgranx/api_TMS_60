import { createStore, combineReducers } from "redux";

import { postsReducer } from "./posts";

const reducers = combineReducers({ posts: postsReducer });
const store = createStore(reducers);

export default store;
