import React, { useState } from "react";
import { useTodoStore } from "../todoContext";

const AddTodo = React.memo(function AddTodo({ todoActions }) {
  const [task, setTask] = useState("");

  console.log("Renderizou AddTodo");
  
  const handleChangeInput = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    if (task) todoActions.addTodo(task);

    setTask("");
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChangeInput} />
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
});

const AddTodoContainer = () => {
  const { todoActions } = useTodoStore();
  console.log("Renderizou o AddTodo Container");
  return <AddTodo todoActions={todoActions} />;
};

export default AddTodoContainer;


// import React, { useState } from "react";
// import { useTodoStore } from "../todoContext";

//  const AddTodo = () => {
//   const [task, setTask] = useState("");
//   const { todoActions } = useTodoStore();

//   console.log("Renderizou AddTodo");
//   const handleChangeInput = (event) => {
//     setTask(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     if (task) todoActions.addTodo(task);

//     setTask("");
//     event.preventDefault();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={task} onChange={handleChangeInput} />
//         <button type="submit">Adicionar Tarefa</button>
//       </form>
//     </div>
//   );
// };

// export default AddTodo;