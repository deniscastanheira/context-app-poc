import React, { createContext, useContext, useReducer, useMemo } from "react";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext(null);
TodoContext.displayName = "TodoContext";

const initialTodos = {
  todos: [
    {
      id: `task1_${uuid()}`,
      task: "Tarefa 1",
      complete: false,
    },
    {
      id: `task2_${uuid()}`,
      task: "Tarefa 2",
      complete: false,
    },
    {
      id: `task3_${uuid()}`,
      task: "Tarefa 3",
      complete: false,
    },
  ],
};

const todoReducer = (state, action) => {
  const { todos } = state;
  switch (action.type) {
    case "DO_TODO":
      return {
        todos: todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: true };
          } else {
            return todo;
          }
        }),
      };
    case "UNDO_TODO":
      return {
        todos: todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: false };
          } else {
            return todo;
          }
        }),
      };
    case "ADD_TODO": {
      return {
        todos: todos.concat({
          task: action.task,
          id: action.id,
          complete: false,
        }),
      };
    }
    default:
      throw new Error();
  }
};

const todoActions = (dispatch) => ({
  doTodo: (id) => {
    dispatch({
      type: "DO_TODO",
      id,
    });
  },
  undoTodo: (id) => {
    dispatch({
      type: "UNDO_TODO",
      id,
    });
  },
  addTodo: (task) => {
    dispatch({
      type: "ADD_TODO",
      task,
      id: uuid(),
    });
  },
});

// function TodoProvider(props) {
//   const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
//   const todoStore = { ...todos, todoActions: todoActions(dispatchTodos) };
//   return <TodoContext.Provider value={todoStore} {...props} />;
// }

function TodoProvider(props) {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  const actions = useMemo(() => todoActions(dispatchTodos), [dispatchTodos]);

  const todoStore = useMemo(() => ({ ...todos, todoActions: actions }), [
    todos,
    actions,
  ]);

  return <TodoContext.Provider value={todoStore} {...props} />;
}

function useTodoStore() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoStore };
