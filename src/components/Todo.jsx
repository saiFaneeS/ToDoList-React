import React from "react";
import styled from "styled-components";
import { IoMdTrash } from "react-icons/io";

function Todo({ text, todos, setTodos, todo }) {
  const DeleteHandler = () => {
    setTodos(todos.filter((i) => i.id !== todo.id));
  };

  return (
    <List>
      <li>{text}</li>
      <button onClick={DeleteHandler}>
        <IoMdTrash />
      </button>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem 0rem;
  li {
    margin-right: 1rem;
    line-height: 1.9rem;
    background-color: #fff;
    color: #222;
    text-align: left;
    padding: 0rem 1rem;
    max-width: 50vw;
    overflow: hidden;
    background: #eee;
    min-width: 10rem;
  }
  button {
    display: flex;
    justify-content: center;
    background: #f1515e;
    align-items: center;
    color: #fff;
    font-size: 1rem;
    border: none;
    outline: none;
    text-align: center;
    padding: 0.5rem 0.9rem;
    right: 0;
  }
`;

export default Todo;
