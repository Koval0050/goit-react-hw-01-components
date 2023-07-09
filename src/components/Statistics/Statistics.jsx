import PropTypes from 'prop-types';
import StatsList from './StatsItem';
import { SectionStatictics } from './SectionStatictics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <SectionStatictics>
      {title ? (
        <h2 className="title">{title}</h2>
      ) : (
        <ul className="stat-list">
          <StatsList stats={stats} />
        </ul>
      )}
    </SectionStatictics>
  );
};
Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
