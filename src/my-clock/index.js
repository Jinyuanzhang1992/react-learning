import { useEffect, useRef, useState } from "react";

function MyClock(props) {
  const pRef = useRef(null);

  const [time, setTime] = useState(new Date().toLocaleString());
  // 钩子函数 time是变量，setTime是函数

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // 副作用钩子，

  return (
    <div>
      <h1>React Clock</h1>
      <h2>{time}</h2>
      {/* {}jsx提供的模板语法，可以调用变量 */}
      <div ref={pRef}>
        <h3>1 + 1 = {1 + 1}</h3>
        <h3>Min value between 1 and 2 is {Math.min(1, 2)}</h3>
      </div>
      <button
        onClick={(e) => {
          console.log(pRef.current.innerText);
          alert(pRef.current.innerText);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default MyClock;
