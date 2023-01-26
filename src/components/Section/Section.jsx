import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';
import { SectionSt, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionSt>
      <Title>
        <FaCheck size="20px" color="blue" /> {title}
      </Title>
      {children}
    </SectionSt>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
