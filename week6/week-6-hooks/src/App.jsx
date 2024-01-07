import { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import { useEffect } from "react";

// function App() {
//   const [selectedId, setSelectedId] = useState(1);

//   return (
//     <div>
//       <button
//         onClick={function () {
//           setSelectedId(1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(2);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(3);
//         }}
//       >
//         3
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(4);
//         }}
//       >
//         4
//       </button>
//       <Todo id={selectedId} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async function (
//       res
//     ) {
//       const json = await res.json();
//       setTodo(json.todo);
//     });
//   }, [id]);

//   return (
//     <div>
//       <h1>Id: {id}</h1>
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }

// export default App;

//////////////////////////

// import { useState, useEffect } from "react";

// import "./App.css";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
//       const json = await res.json();
//       setTodos(json.todos);
//     });
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//     </div>
//   );
// }

// export default App;
