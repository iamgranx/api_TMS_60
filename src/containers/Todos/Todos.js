import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "../../components/Todos/Todo";

import { getTodos, getSlice } from "../../store/todos";

import * as Statuses from  "../../store/statuses";


const TodosWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const Todos = () => {
    const dispatch = useDispatch();
    const { todos, todosRequestStatus } = useSelector(getSlice);

    useEffect(() => {
      dispatch(getTodos()); 
    }, [dispatch]);

    return (
      <TodosWrapper>
        {todosRequestStatus === Statuses.PENDING && "loading..."}
        {todosRequestStatus === Statuses.FAILURE && "lsome error"}
        {todos?.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </TodosWrapper>
    );
};

export default Todos;