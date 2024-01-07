import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Buttton count={count} setCount={setCount}></Buttton>
    </div>
  );
}

function Buttton(props) {
  function onButtonClick() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onButtonClick}>Counter {props.count}</button>;
}

export default App;
