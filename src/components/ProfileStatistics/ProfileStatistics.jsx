import PropTypes from 'prop-types';
import { Stats } from './Stats.styled';
const Statistics = ({ followers, views, likes }) => {
  return (
    <Stats>
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </Stats>
  );
};

Statistics.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Statistics;
