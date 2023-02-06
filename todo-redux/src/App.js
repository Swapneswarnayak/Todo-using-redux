import logo from "./logo.svg";
import "./App.css";
import Addtodo from "./components/Addtodo";
import Showtodo from "./components/Showtodo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Addtodo />
      <Showtodo />
    </div>
  );
}

export default App;
