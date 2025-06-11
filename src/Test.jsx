import React from "react";
import { useMemo, useState } from "react";
export default function Test() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(10);
  const f1 = () => {
    let i;
    for (i = 1; i < flag ** 2; i++) {
      //complex calculation
    }
    console.log("F1 function called");
    return i;
  };
    // const result = f1();
  const result = useMemo(() => f1(), [flag]);
  return (
    <div>
      <h2>useMemo hook</h2>
      <p>
        <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      </p>
      <p>
        <button onClick={() => setFlag(flag + 1)}>Flag:{flag}</button>
      </p>
      <hr />
      <p>Result:{result}</p>
    </div>
  );
}