import { useToogle } from "./useToogle";
import "./App.css";

function App() {
  const [isVisible, toogle] = useToogle();
  return (
    <div>
      <button onClick={toogle}> {isVisible ? "Hide" : "show"} </button>

      {isVisible && <h1>hidden txt</h1>}
    </div>
  );
}

export default App;
