import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main/Main';


function App() {
  const dispatch = useDispatch()
  

  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" component={Main}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
