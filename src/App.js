import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Card } from './components/Card/Card';
import { Main } from './components/Main/Main';


function App() {
  const dispatch = useDispatch()
  

  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/card" component={Card}/>
        <Redirect to="/" />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
