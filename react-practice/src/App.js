import "./App.css";
import FirstComponent from "./components/component";
import MyProps from "./components/prop";
import State from "./components/state";
import Counter from "./components/Counter";
import ClickFunction from "./components/clickFunction";
import MyForm from "./components/Form";
import Garage from "./components/list";

function App() {
  return (
    <div className="App">
      <Garage></Garage>
      {/* <MyForm></MyForm> */}
      {/* <ClickFunction></ClickFunction> */}
      {/* <State></State> */}
      {/* <FirstComponent></FirstComponent>

      <MyProps name="my first props">
        <p>this is props children</p>
      </MyProps> */}
    </div>
  );
}

export default App;
