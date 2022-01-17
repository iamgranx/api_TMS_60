import * as apiPosts from "../../api/posts";

export const SET_POSTS_REQUEST_STATUS_PENDING =
  "SET_POSTS_REQUEST_STATUS_PENDING";

export const SET_POSTS_REQUEST_STATUS_FAILURE =
  "SET_POSTS_REQUEST_STATUS_FAILURE";

export const SET_POSTS = "SET_POSTS";

export const setPostsRequestStatusPending = () => ({
  type: SET_POSTS_REQUEST_STATUS_PENDING,
});

export const setPostsRequestSuccess = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const setPostsRequestStatusFailure = () => ({
  type: SET_POSTS_REQUEST_STATUS_FAILURE,
});

export const getPosts = () => {
  return (dispatch) => {
    dispatch(setPostsRequestStatusPending());

    apiPosts
      .getPosts()
      .then((posts) => dispatch(setPostsRequestSuccess(posts)))
      .catch(() => dispatch(setPostsRequestStatusFailure()));
  };
};
