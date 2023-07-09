import PropTypes from 'prop-types';

const StatsList = ({ stats }) => {
  return stats.map(e => {
    return (
      <li className="item" key={e.id}>
        <span className="label">{e.label}</span>
        <span className="percentage">{e.percentage}%</span>
      </li>
    );
  });
};

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default StatsList;
