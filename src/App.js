import logo from './logo.svg';
import './App.css';
import Navbar from './componets/navbar/navbar';
import Filter from './componets/filter/filter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Filter/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
