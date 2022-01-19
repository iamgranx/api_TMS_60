import React, { useEffect } from "react";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSlice, getPost, getPostComments } from "../../store/posts";
import * as Statuses from "../../store/statuses";

const PostDetailWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const CommentsWrapper = styled("ol")`
  margin: 0px 0px 0px 16px;
  padding: 0px;

  > li {
    border-bottom: 1px solid gray;
    padding: 4px;

    > h5 {
      margin: 0px 0px 8px;
    }

    > span {
      font-size: 12px;
    }

    > p {
      margin: 4px 0px 0px;
    }
  }
`;

const PostDetail = () => {
  const dispatch = useDispatch();
  const { post, postRequestStatus, postComments, postCommentsRequestStatus } =
    useSelector(getSlice);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      dispatch(getPost(params.id));
      dispatch(getPostComments(params.id));
    }
  }, [dispatch, params.id]);

  const isLoading = [postRequestStatus, postCommentsRequestStatus].includes(
    Statuses.PENDING
  );
  const isError = [postRequestStatus, postCommentsRequestStatus].includes(
    Statuses.FAILURE
  );

  return (
    <PostDetailWrapper>
      {isLoading && "loading..."}
      {isError && "some error..."}
      {!isLoading && !isError && post && !!postComments.length && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <CommentsWrapper>
            {postComments?.map((comment) => (
              <li key={comment.id}>
                <h5>{comment.name}</h5>
                <span>{comment.email}</span>
                <p>{comment.body}</p>
              </li>
            ))}
          </CommentsWrapper>
        </>
      )}
    </PostDetailWrapper>
  );
};

export default PostDetail;
