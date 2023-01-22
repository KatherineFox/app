import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Router,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <ul className="navbar">
          <FontAwesomeIcon icon="fa-regular fa-bars" />
          <li>Country</li>
          <div className="inputBlock">
            <input type="search" placeholder="Search by country name"></input>
          </div>
        </ul>
        Hiiii
      </div>
    </div>
  );
}

export default App;
