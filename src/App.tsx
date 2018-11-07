import React, { Suspense, lazy } from "react";
import { Spin } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Header";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const User = lazy(() => import("./components/User"));
function App() {
  return (
    <div>
      <Router>
        <>
          <Menu />
          <div className="App">
            <Suspense fallback={<Spin />}>
              <Route path="/" exact component={Home} />
              <Route path="/user" component={User} />
            </Suspense>
          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
