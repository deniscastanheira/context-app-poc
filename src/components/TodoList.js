import React from "react";
import { useTodoStore } from "../todoContext";

const TodoList = (/*{ todos, todoActions }*/) => {
  const { todos, todoActions } = useTodoStore();
  console.log("Renderizou o Todo List");

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todoActions={todoActions} />
      ))}
    </ul>
  );
};

const TodoItem = React.memo(function TodoItem({ todo, todoActions }) {
  const handleChange = () => {
    todo.complete ? todoActions.undoTodo(todo.id) : todoActions.doTodo(todo.id);
  };

  console.log(`Renderizou o Todo Item: ${todo.id}`);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        {todo.task}
      </label>
    </li>
  );
});

export default TodoList

// const MapStateAndDispatch = () => {
//   const { todos, todoActions } = useTodoStore();
//   console.log("Renderizou o TodoList Container");
//   return <TodoList todos={todos} todoActions={todoActions} />;
// };

// export default MapStateAndDispatch;

// import React from "react";
// import { useTodoStore } from "../todoContext";

// const TodoList = () => {
//   const { todos, todoActions } = useTodoStore();
//   console.log("Renderizou o Todo List");

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} todoActions={todoActions} />
//       ))}
//     </ul>
//   );
// };

// const TodoItem = ({ todo, todoActions }) => {
//   const handleChange = () => {
//     todo.complete ? todoActions.undoTodo(todo.id) : todoActions.doTodo(todo.id);
//   };

//   console.log(`Renderizou o Todo Item: ${todo.id}`);

//   return (
//     <li>
//       <label>
//         <input
//           type="checkbox"
//           checked={todo.complete}
//           onChange={handleChange}
//         />
//         {todo.task}
//       </label>
//     </li>
//   );
// };

// export default TodoList;
