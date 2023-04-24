import React from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

function Form(props) {
  const InputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const SubmitTextHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 100 },
    ]);
    props.setInputText("");
  };

  return (
    <div>
      <HeadText>Saif's Todo List</HeadText>
      <StyledForm>
        <input
          value={props.inputText}
          onChange={InputTextHandler}
          type="text"
          placeholder="Input Task"
        ></input>
        <button onClick={SubmitTextHandler} type="submit">
          <MdAdd />
        </button>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  input {
    border: none;
    color: #222;
    min-width: 20rem;
    background-color: #eee;
    outline: none;
    padding: 0.5rem 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #007fff;
    color: #fff;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    margin-left: 1rem;
  }
`;

const HeadText = styled.h2`
  text-align: center;
  color: #eee;
  margin-top: 5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default Form;
