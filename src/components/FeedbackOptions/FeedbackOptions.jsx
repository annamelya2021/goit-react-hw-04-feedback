import PropTypes from 'prop-types';
import { ListButton, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, LeaveFeedbackFn }) => {
  return (
    <ListButton>
      {options.map(option => {
        return (
          <Button key={option} onClick={() => LeaveFeedbackFn(option)}>
            {option}
          </Button>
        );
      })}
    </ListButton>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
