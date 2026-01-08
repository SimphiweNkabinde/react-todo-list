import { useState } from "react";
import NewTodoForm from "./NewTodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newItem) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list-unstyled">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="form-check d-flex gap-2 align-items-center"
          >
            <input
              id={todo.id}
              type="checkbox"
              checked={todo.completed}
              className="form-check-input"
              onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />
            <label htmlFor="list-item-1" className="form-check-label fs-4">
              {todo.title}
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-sm btn-outline-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
