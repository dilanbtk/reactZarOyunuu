import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Post from './components/Post';
import ZarOyunu from './components/ZarOyunu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}

       {/* <Users></Users>
       <Post></Post> */}
      <ZarOyunu></ZarOyunu>
      </header>
    </div>
  );
}

export default App;
