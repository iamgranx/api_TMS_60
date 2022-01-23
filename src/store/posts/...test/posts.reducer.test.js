import { SET_POSTS_REQUEST_STATUS_PENDING,
    SET_POSTS,
    SET_POSTS_REQUEST_STATUS_FAILURE, 
    SET_POST,
    SET_POST_REQUEST_STATUS_FAILURE,
    SET_POST_REQUEST_STATUS_PENDING,
    SET_POST_COMMENTS,
    SET_POST_COMMENTS_REQUEST_STATUS_FAILURE,
    SET_POST_COMMENTS_REQUEST_STATUS_PENDING,
} from '../posts.actions';

import { postsReducer, initialState } from '../posts.reducer';

import * as Statuses from '../../statuses';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';



describe("postReducer", () => {
    it("SET_POSTS_REQUEST_STATUS_PENDING", () => {
        const action = { type: SET_POSTS_REQUEST_STATUS_PENDING };

    expect(postsReducer(initialState, action)).toEqual({
        ...initialState,
        postsRequestStatus: Statuses.PENDING,
    })
});
    it("SET_POSTS", () => {
        const action = { type: SET_POSTS,
                         payload: [
                             {
                                 id: 1,
                                 userId: 1,
                                 title: "title",
                                 body: "body"
                             }
                         ] };
    expect(postsReducer(initialState, action)).toEqual({
        ...initialState,
        posts: [{
            id: 1,
            userId: 1,
            title: "title",
            body: "body"
        }],
        postsRequestStatus: Statuses.SUCCESS
    });
    });
    it("SET_POSTS_REQUEST_STATUS_FAILURE", () => {
        const action = { type: SET_POSTS_REQUEST_STATUS_FAILURE };
    expect(postsReducer(initialState, action)).toEqual({
        ...initialState,
        postsRequestStatus: Statuses.FAILURE
    });
    });
    //
    it("SET_POST", () => {
        const action = { type: SET_POST, payload: [{
            id: 1,
            userId: 1,
            title: "title",
            body: "body"
        }], };
    expect(postsReducer(initialState, action)).toEqual({
        ...initialState,
        post: [{
            id: 1,
            userId: 1,
            title: "title",
            body: "body"
        }],
        postRequestStatus: Statuses.SUCCESS
    });
    });
    it("SET_POST_REQUEST_STATUS_FAILURE", () => {
        const action = { type: SET_POST_REQUEST_STATUS_FAILURE };
    expect(postsReducer(initialState, action)).toEqual({
        ...initialState,
        postRequestStatus: Statuses.FAILURE
    });
    });
    it("SET_POST_REQUEST_STATUS_PENDING", () => {
        const action = { type: SET_POST_REQUEST_STATUS_PENDING };
    expect(postsReducer(initialState, action)).toEqual({
        ...initialState,
        postRequestStatus: Statuses.PENDING
    });
    });
    //
    it("SET_POST_COMMENTS", () => {
        const action = { type: SET_POST_COMMENTS, payload: [{
            id: 1,
            userId: 1,
            title: "title",
            body: "body"
        }], };
    expect(postsReducer(initialState, action)).toEqual({
        ...initialState,
        postComments: [{
            id: 1,
            userId: 1,
            title: "title",
            body: "body"
        }],
        postCommentsRequestStatus: Statuses.SUCCESS
    });
    });
    it("SET_POST_COMMENTS_REQUEST_STATUS_FAILURE", () => {
        const action = { type: SET_POST_COMMENTS_REQUEST_STATUS_FAILURE };
    expect(postsReducer(initialState, action)).toEqual({
        ...initialState,
        postCommentsRequestStatus: Statuses.FAILURE
    });
    });
    it("SET_POST_COMMENTS_REQUEST_STATUS_PENDING", () => {
        const action = { type: SET_POST_COMMENTS_REQUEST_STATUS_PENDING };
    expect(postsReducer(initialState, action)).toEqual({
        ...initialState,
        postCommentsRequestStatus: Statuses.PENDING
    });
    });
    
});


