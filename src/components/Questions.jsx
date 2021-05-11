import React from 'react';
import './questions.css';

export default function Questions() {
  return (
    <div className='Questions'>
      <div className='question'>What's your name?</div>
      <div className='answers'>
        <div className='answer correct'>John</div>
        <div className='answer'>Jane</div>
        <div className='answer'>Michael</div>
        <div className='answer'>Miko</div>
      </div>
    </div>
  );
}
