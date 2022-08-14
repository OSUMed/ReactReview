import "./App.css";
import Lab from "./Lab.js";
import Operators from "./Lecture3.js";
import Lecture2 from "./Lecture1.js";
import Lists3 from "./Lists3.js";

function App() {
  const name = "Pedro";
  return (
    <div className="App">
      {/* <h2>{name}</h2> */}
      <Operators />
      <Lists3 />
    </div>
  );
}

export default App;
