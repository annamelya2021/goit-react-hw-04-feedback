import PropTypes from 'prop-types';
import { FaGrimace, FaGrinHearts, FaGrinBeamSweat } from 'react-icons/fa';
import { Statistic, Bold } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentageFeedback,
}) => {
  return (
    <Statistic>
      <li>
        <FaGrinHearts style={{ marginRight: 2 }} size="15px" color="orange" />
        Good: {good}
      </li>
      <li>
        <FaGrinBeamSweat style={{ marginRight: 2 }} size="15px" color="green" />
        Neutral: {neutral}
      </li>
      <li>
        <FaGrimace style={{ marginRight: 2 }} size="15px" color="red" />
        Bad: {bad}
      </li>
      <Bold>Total: {total}</Bold>
      <Bold>Positive Feedback:{positivePercentageFeedback}%</Bold>
    </Statistic>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentageFeedback: PropTypes.number.isRequired,
};

export default Statistics;
