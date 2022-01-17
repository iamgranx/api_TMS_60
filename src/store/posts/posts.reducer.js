import * as Statuses from "../statuses";
import {
  SET_POSTS,
  SET_POSTS_REQUEST_STATUS_FAILURE,
  SET_POSTS_REQUEST_STATUS_PENDING,
} from "./posts.actions";

const initialState = {
  postsRequestStatus: Statuses.UNCALLED,
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS_REQUEST_STATUS_PENDING:
      return { ...state, postsRequestStatus: Statuses.PENDING };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsRequestStatus: Statuses.SUCCESS,
      };
    case SET_POSTS_REQUEST_STATUS_FAILURE:
      return { ...state, postsRequestStatus: Statuses.FAILURE };
    default:
      return state;
  }
};
