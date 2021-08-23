
import './App.css';
import { initNotification } from "./service/firebase-service"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>hello</h1>
      <button onClick={initNotification}>conher</button>
      </header>
    </div>
  );
}

export default App;
