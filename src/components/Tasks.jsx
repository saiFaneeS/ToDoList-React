import Todo from "./Todo";
import styled from "styled-components";

function Tasks({todos, setTodos}) {
  return (
    <TasksList>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              text={todo.text}
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
          );
        })}
      </ul>
    </TasksList>
  );
}

const TasksList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default Tasks;
