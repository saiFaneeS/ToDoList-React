import Form from "./components/Form";
import Tasks from "./components/Tasks";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <Tasks todos={todos} setTodos={setTodos} inputText={inputText}/>
    </div>
  );
}

export default App;
