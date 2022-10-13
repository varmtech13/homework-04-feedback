import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <List>
        {options.map(option => {
          return (
            <Item key={option}>
              <Button type="button" name={option} onClick={onLeaveFeedback}>
                {option}
              </Button>
            </Item>
          );
        })}
      </List>
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
