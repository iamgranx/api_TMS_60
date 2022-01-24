import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import User from "../../components/User";
import { getUsers, getSlice } from "../../store/users";
import * as Statuses from "../../store/statuses";

const UsersWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const Users = () => {
  const dispatch = useDispatch();
  const { users, usersRequestStatus } = useSelector(getSlice);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <UsersWrapper>
      {usersRequestStatus === Statuses.PENDING && "loading..."}
      {usersRequestStatus === Statuses.FAILURE && "some error..."}
      {users?.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </UsersWrapper>
  );
};

export default Users;
