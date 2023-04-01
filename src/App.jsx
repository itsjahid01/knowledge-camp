
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Blog from "./components/Blog/Blog";

function App() {


  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Blogs></Blogs>
      <Blog></Blog>
    </div>
  );
}

export default App;
