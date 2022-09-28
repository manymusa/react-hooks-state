import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(count)
    setCount((previousState) => previousState +1)
    setCount((previousState) => previousState +1)
    console.log(count)
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
