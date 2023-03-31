import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
