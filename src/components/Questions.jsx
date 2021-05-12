import React, { useState, useEffect } from 'react';
import './questions.css';

export default function Questions({
  data,
  setTimeOut,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = a => {
    setSelectedAnswer(a);
    setClassName('answer active');
  };

  return (
    <div className='Questions'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map(answer => (
          <div
            className={selectedAnswer === answer ? className : 'answer'}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}
