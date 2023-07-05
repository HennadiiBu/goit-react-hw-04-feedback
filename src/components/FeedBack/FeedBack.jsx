import style from './FeedBack.module.css'

import React from 'react';

function FeedBack({good,bad,neutral,leaveNeutralFeedback,leaveBadFeedback,leaveGoodFeedback}) {

  return (
    <div>
      <h1>Please leave feedback</h1>
      <div>
        <button
          name="good"
          value={good}
          className={style.btn}
          onClick={leaveGoodFeedback}
        >
          Good
        </button>
        <button
          name="neutral"
          value={neutral}
          className={style.btn}
          onClick={leaveNeutralFeedback}
        >
          Neutral
        </button>
        <button
          name="bad"
          value={bad}
          className={style.btn}
          onClick={leaveBadFeedback}
        >
          Bad
        </button>
      </div>
    </div>
  );
}

export default FeedBack;
