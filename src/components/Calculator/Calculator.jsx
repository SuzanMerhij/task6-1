import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const appendCharacter = (character) => {
    setResult(result + character);
  };

  const clearResult = () => {
    setResult('');
  };

  const deleteLastCharacter = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    setResult(eval(result));
  };

  return (
    <div className="calculator">
      <input type="text" id="result" value={result} readOnly />
      <div className="buttons">
        <button onClick={() => clearResult()} className="bg-red del">
          C
        </button>
        <button onClick={() => deleteLastCharacter()}>&larr;</button>
        <button onClick={() => appendCharacter('/')}>/</button>
        <button onClick={() => appendCharacter('1')}>1</button>
        <button onClick={() => appendCharacter('2')}>2</button>
        <button onClick={() => appendCharacter('*')}>*</button>
        <button onClick={() => appendCharacter('3')}>3</button>
        <button onClick={() => appendCharacter('4')}>4</button>
        <button onClick={() => appendCharacter('+')}>+</button>
        <button onClick={() => appendCharacter('5')}>5</button>
        <button onClick={() => appendCharacter('6')}>6</button>
        <button onClick={() => appendCharacter('-')}>-</button>
        <button onClick={() => appendCharacter('7')}>7</button>
        <button onClick={() => appendCharacter('8')}>8</button>
        <button onClick={() => appendCharacter('9')}>9</button>
        <button onClick={() => appendCharacter('0')}>0</button>
        <button onClick={() => appendCharacter('.')}>.</button>
        <button onClick={() => calculate()} className="bg-green">=</button>
      </div>
    </div>
  );
};

export default Calculator;