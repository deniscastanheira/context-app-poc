import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import { TodoProvider } from "./todoContext";

const App = () => {
  console.log("Renderizou o App");
  return (
    <TodoProvider>
      <TodoList />
      <AddTodo />
    </TodoProvider>
  );
};

export default App;
