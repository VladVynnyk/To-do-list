import './App.css';
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
            <h1 style={{marginTop: 0}}>To do list</h1>
        </div>
    </div>
  );
}

export default App;
