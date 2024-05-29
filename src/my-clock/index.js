import { useEffect, useState } from "react";

function MyClock(props) {
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
    </div>
  );
}

export default MyClock;
