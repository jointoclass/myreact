import { useEffect, useState } from "react";

export function Example1() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("렌더링됨. 현재 Count: " + count);
  });
  useEffect(() => {
    console.log("이 코드는 마운트(=로딩)될 때만 실행됨!");
  }, []);
  useEffect(() => {
    console.log("카운트가 변경될때만 렌더링 Count: " + count);
  }, [count]);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </>
  );
}
