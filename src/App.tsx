import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const sumNum = (num1: number, num2: number) => {

    const result = num1+num2;

    return result;

  }
  return (
    <div className="App">
      <div>{sumNum(1,2)}</div>
    </div>
  );
}

export default App;
