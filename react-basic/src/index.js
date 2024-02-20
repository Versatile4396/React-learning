import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// 把App跟组件渲染到id 为root 的dom节点上
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
