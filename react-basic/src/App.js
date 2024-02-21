import { useState, useRef } from "react";
function Son({ onGetMsg, ...props }) {
  const sonMsg = "son massage";
  onGetMsg(sonMsg);
  return <div>this is son {props.children}</div>;
}
function App() {
  const getMsg = (msg) => {
    console.log(msg);
  };
  return (
    <div>
      <Son onGetMsg={getMsg}>
        <div>123</div>
      </Son>
    </div>
  );
}
export default App;
