import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Header';
import './App.css';

const Home = lazy(() => import('./components/Home'));
function App() {
  return (
    <>
      <Menu />
      <Router>
        <Suspense fallback={<Spin />}>
          <Route exact path="/home" component={Home} />
        </Suspense>  
      </Router>  
    </>
  );
}


export default App;
