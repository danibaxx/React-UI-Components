import React from 'react';
import './Button.css';

const Buttons = () => {
  return (
    <div className="cal-wrap">
      <input type="text" >
        
      </div>

      <div className="row">
        <button className={props.buttonStyle}>clear</button>
        <button className={props.buttonStyle}>÷</button>
      </div>

      <div className="row">
      <button className={props.buttonStyle}>7</button>
      <button className={props.buttonStyle}>>8</button>
      <button className={props.buttonStyle}>9</button>
      <button className={props.buttonStyle}>×</button>
      </div>

      <div className="row">
      <button className={props.buttonStyle}>4</button>
      <button className={props.buttonStyle}>5</button>
      <button className={props.buttonStyle}>6</button>
      <button className={props.buttonStyle}>-</button>
      </div>

      <div className="row">
      <button className={props.buttonStyle}>1</button>
      <button className={props.buttonStyle}>2</button>
      <button className={props.buttonStyle}>3</button>
        <button className={props.buttonStyle}>+</button>
      </div>

      <div className="row">
      <button className={props.buttonStyle}>0</button>
      <button className={props.buttonStyle}>=</button>
      </div>
    </div>
  );
};

export default Buttons;