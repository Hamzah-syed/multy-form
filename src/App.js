import React from "react";
import "./css/App.css";
import "./css/tailwind.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Context
import { GlobalContextProvider } from "./globalContext/GlobalContext";
//pages
import Login from "./components/Login";
import Signup from "./components/Signup";
//layout
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalContextProvider>
          <Header />
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Signup} />
        </GlobalContextProvider>
      </Router>
    </div>
  );
}

export default App;
