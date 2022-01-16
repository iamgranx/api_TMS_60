import React, { useCallback } from 'react';

import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { getPost, getPostComments } from '../../api/posts';
import { useRequest } from '../../hooks/useRequest';

const PostDetailWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const CommentsWrapper = styled('ol')`
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
  const params = useParams();

  const requestPostComments = useCallback(() => getPostComments(params.id), [params.id]);
  const { data: comments, loading: loadingComments, error: errorComments } = useRequest(requestPostComments);

  const requestPostById = useCallback(() => getPost(params.id), [params.id]);
  const { data: post, loading: loadingPost, error: errorPost } = useRequest(requestPostById);

  const isLoading = loadingComments || loadingPost;
  const isError = errorComments || errorPost;

  return (
    <PostDetailWrapper>
      {isLoading && 'loading...'}
      {isError && 'some error...'}
      {!isLoading && !isError && post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
      <CommentsWrapper>
        {!isLoading &&
          !isError &&
          comments?.map(comment => (
            <li key={comment.id}>
              <h5>{comment.name}</h5>
              <span>{comment.email}</span>
              <p>{comment.body}</p>
            </li>
          ))}
      </CommentsWrapper>
    </PostDetailWrapper>
  );
};

export default PostDetail;
