import { useState } from "react";

const btnClick2 = (event) => {
  console.log("btnClick2");
};
const list = [
  { id: 1, name: "zhangsan" },
  { id: 2, name: "zhangsan" },
  { id: 3, name: "zhangsan" },
  { id: 4, name: "zhangsan" },
];
function App() {
  const [count, setCount] = useState(0);
  const btnClick = () => {
    setCount(count + 1);
  };
  return (
    <div onClick={btnClick} className="App">
      {count}
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
export default App;
