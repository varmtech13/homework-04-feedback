import PropTypes from 'prop-types';
import { Block, StatisticBlock } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticBlock>
      <Block>Good: {good}</Block>
      <Block>Neutral: {neutral}</Block>
      <Block>Bad: {bad}</Block>
      <Block>Total: {total}</Block>
      <Block>Positive feedback: {positivePercentage}%</Block>
    </StatisticBlock>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
