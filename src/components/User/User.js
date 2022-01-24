import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UserWrapper = styled("div")`
  flex: 1 0 calc(25% - 8px);
  display: flex;
  flex-direction: column;
  border: 1.5px solid gray;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 8px;
  margin: 4px;

  > h6 {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid gray;
    padding-bottom: 8px;
    margin-top: 0px;
    margin-bottom: 8px;
  }

  > p {
    margin-top: auto;
    font-size: 14px;
    font-weight: 300;
  }

  > button {
    width: 100%;
    margin-top: auto;
  }
`;

const User = ({ id, name, username }) => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/posts/${id}`);
  // };

  return (
    <UserWrapper>
      <h6>{name}</h6>
      <p>{username}...</p>
      {/* <button onClick={handleClick}>detail</button> */}
    </UserWrapper>
  );
};

export default User;

User.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  
  
};
