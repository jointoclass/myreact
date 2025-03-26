let count = 0;

export function CounterWithoutState() {
  function increase() {
    count = count + 1;
    console.log("현재 카운트:" + count);
  }

  return (
    <>
      <h2>카운터 (상태관리 없음)</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          increase();
        }}
      >
        +
      </button>
    </>
  );
}
