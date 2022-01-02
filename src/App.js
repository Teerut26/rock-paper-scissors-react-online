import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Page1 from "./components/Page1";
// var _ = require("lodash");

function App(props) {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page-1" element={<Page1 />} />
        </Routes>
    </Router>
  );
}

export default connect((state) => {
  return state;
})(App);
