import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>Current Count is {count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>Count Up</button>
    </div>
  );
};

export default Count;
