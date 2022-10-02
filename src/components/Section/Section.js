import PropTypes from 'prop-types';
import { Title, SectionBlock } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      {title && <Title>{title}</Title>}
      {children}
    </SectionBlock>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
