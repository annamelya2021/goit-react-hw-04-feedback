import { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { Container } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);
  const options = Object.keys({ good, neutral, bad });

  const LeaveFeedbackFn = value => {
    switch (value) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  return (
    <Container className="">
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} LeaveFeedbackFn={LeaveFeedbackFn} />
      </Section>
      {}
      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentageFeedback={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
  // }
};

export default App;
