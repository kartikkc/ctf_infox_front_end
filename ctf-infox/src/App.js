import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Navbar from "./Components/nav";
import Home from "./Components/homepage";
import Challenge from "./Components/challengesTemp";
import Login from "./Components/login";
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
         <Route exact path="/">
            <div className="Home">
              <Home page="home" />
            </div>
          </Route>
        {/*  <Route exact path="/challenges">
            <div className="Challenges">
              <Challenge page="challenges" />
            </div>
          </Route>
          <Route exact path="/login">
            <div className="login">
              <Login page="login" />
            </div>
          </Route> */}
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
}

export default App;
