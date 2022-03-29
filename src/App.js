import logo from "./logo.svg";
import "./App.css";
import Register from "./Register";
import Login from "./Login";
function App() {
  return (
    <div className="container">
      <Login></Login>
      <hr></hr>
      <Register></Register>
    </div>
  );
}

export default App;
