import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedBack from './FeedBack/FeedBack';

function App() {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [positiveFB, positiveFeedbackUpdate] = useState(0);
  const [totalFB, setTottalFB] = useState(0);

  const positiveFeedback = () => {
    if (good === 0) {
      return;
    }
    positiveFeedbackUpdate(() =>
      Math.round((good / (good + neutral + bad)) * 100)
    );
  };

  const leaveGoodFeedback = event => {
    setGood(() => Number.parseInt(event.target.value) + 1);
    total();
    positiveFeedback();
  };

  const leaveBadFeedback = event => {
    setBad(() => Number.parseInt(event.target.value) + 1);
    total();
    positiveFeedback();
  };

  const leaveNeutralFeedback = event => {
    setNeutral(() => Number.parseInt(event.target.value) + 1);
    total();
    positiveFeedback();
  };

  const total = () => {
    setTottalFB(() => Math.round(good + neutral + bad));
  };

  return (
    <div className="container">
      <FeedBack
        neutral={neutral}
        good={good}
        bad={bad}
        totalFB={totalFB}
        leaveNeutralFeedback={leaveNeutralFeedback}
        leaveBadFeedback={leaveBadFeedback}
        leaveGoodFeedback={leaveGoodFeedback}
      />
      <Statistics
        totalFB={totalFB}
        positiveFB={positiveFB}
        neutral={neutral}
        good={good}
        bad={bad}
      />
    </div>
  );
}

export default App;
