import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setCount } from './reducers/reposReducer';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.repos.count)
  const onClickCount = () => {
    dispatch(setCount(5))
  }

  return (
    <div className="App">
      <button onClick={()=> onClickCount()}>Set Count</button>
  <div>{count}</div>
    </div>
  );
}

export default App;
