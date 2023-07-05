import React from 'react';

function Statistics({ good, bad, neutral, totalFB, positiveFB }) {
  return (
    <div>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFB}</p>
          <p>Positive feedback: {positiveFB}%</p>{' '}
        </div>
      )}
    </div>
  );
}

export default Statistics;
