import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      if (input === '') {
        setResult('Error');
      } else {
        const evalResult = evaluate(input);
        if (input.includes('/0') && !input.includes('/0.')) {
          setResult(evalResult === Infinity ? 'Infinity' : 'NaN');
        } else {
          setResult(evalResult);
        }
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>React Calculator</h1>
        <input type="text" value={input} readOnly />
        <h6 className="result">{result}</h6>
        <div className="buttons">
          {['7', '8', '9', '+'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          {['4', '5', '6', '-'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          {['1', '2', '3', '*'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          {['C', '0', '=', '/'].map((value) => (
            <button key={value} onClick={() => (value === 'C' ? handleClear() : value === '=' ? handleEqual() : handleClick(value))}>
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
