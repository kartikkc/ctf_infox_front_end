import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./Components/nav";
import Home from "./Components/homepage";
import Challenge from "./Components/challengesTemp";
import Login from "./Components/login";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="mainDiv">
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="challenges" element={<Challenge />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </Router>
      {/* <div className="App">
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
      </div> */}
    </>
  );
};

export default App;
