import './App.css';
import { HooksLimitationInadequateOrder, HooksLimitationUseEffect } from "./experiments/01-hooks-limitations";

function App() {
  return (
    <div className="App">
        <HooksLimitationUseEffect />
        <HooksLimitationInadequateOrder />
    </div>
  );
}

export default App;
