import "./App.css";
import Lab from "./Lab.js";

function App() {
  const name = "Pedro";
  return (
    <div className="App">
      {/* <h2>{name}</h2> */}
      {/* <External_Component name="Pedro" age={21} />
      <External_Component name="Srikanth" age={21} />
      <External_Component name="Charlie" age={21} />
      <External_Component2 name="TWO" age={21} /> */}
      {/* <Lab /> */}
      
    </div>
  );
}

const External_Component = (props) => {
  return (
    <h1>
      "Hello There, {props.name}, your age is {props.age}"
    </h1>
  );
};

const External_Component2 = ({ name, age }) => {
  // const { name, age } = props;
  return (
    <h1>
      "Hello There 2, {name}, your age is {age}"
    </h1>
  );
};

const External_Component3 = (props) => {
  const { name, age } = props;
  return (
    <h1>
      "Hello There 2, {name}, your age is {age}"
    </h1>
  );
};

export default App;
