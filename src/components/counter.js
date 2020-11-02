import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import minusImg from '../img/minus.svg'
import plusImg from '../img/plus.svg'
import resetImg from '../img/reset.svg'
import './index.css';

const Counter = ({counter, plus, minus, reset}) => {
  return ( 
    <div className="container">
      <div className="counter">
        <div className="number">{counter}</div>
      </div>
      <div className="buttons">
        <button 
          className="btn btn-green" 
          onClick={plus}
        >
          <img src={plusImg} alt="Plus" />
        </button>
        <button 
          className="btn btn-yellow" 
          onClick={minus}
        >
         <img src={minusImg} alt="Minus" />
        </button>
        <button 
          className="btn btn-red"
          onClick={reset}
        >
          <img src={resetImg} alt="Reset" />
        </button>
      </div>
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
export default connect(mapStateToProps, actions)(Counter);