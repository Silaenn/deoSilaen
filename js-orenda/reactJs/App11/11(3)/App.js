import "./App.css";
import { useAGe } from "./useAge";

function App() {
  const { state, Increase, Descrease, setToZero } = useAGe();

  return (
    <div className="App">
      {state}
      <button onClick={Increase}>Increase</button>
      <button onClick={Descrease}>Descrease</button>
      <button onClick={setToZero}>Set to zero</button>
    </div>
  );
}

export default App;
