import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./addTodo";
import { addValue, getValue } from "src/utils/storage";

const Todo = () => {
  const [todos, setTodos] = useState<
    Record<string, string | boolean | number>[]
  >([]);

  useEffect(() => {
    const storedTodos = getValue("todos");
    setTodos(JSON.parse(storedTodos ?? "[]"));
  }, []);

  const handleAddTodo = (value: string) => {
    const response = [
      ...todos,
      { id: todos.length, todo: value, status: "incompleted" },
    ];
    setTodos(response);
    addValue("todos", response);
  };
  const handleOnClick = (id: number) => {
    const response = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === "completed" ? "incompleted" : "completed",
        };
      }
      return todo;
    });
    setTodos(response);
    addValue("todos", response);
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodo = todos.filter((i) => i.id !== id);
    setTodos(filteredTodo);
    addValue("todos", filteredTodo);
  };

  return (
    <>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        handleOnClick={handleOnClick}
        onDelete={handleDeleteTodo}
      />
    </>
  );
};

export default Todo;
