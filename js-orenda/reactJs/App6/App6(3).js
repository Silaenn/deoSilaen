import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };
  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <div>
        <button onClick={fetchExcuse("party")}>Party</button>
      </div>
      <div>
        <button onClick={fetchExcuse("family")}>Family</button>
      </div>
      <div>
        <button onClick={fetchExcuse("office")}>Office</button>
      </div>

      <p>{generatedExcuse}</p>
    </div>
  );
}

export default App;
