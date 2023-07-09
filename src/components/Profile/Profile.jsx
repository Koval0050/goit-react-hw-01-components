import PropTypes from 'prop-types';
import Statistics from 'components/ProfileStatistics/ProfileStatistics';
import { ProfileContainer, ProfileDescriprion } from './index';

const Profile = props => {
  return (
    <ProfileContainer>
      <img src={props.avatar} alt="User avatar" className="avatar" />
      <ProfileDescriprion>
        <p className="name">{props.username}</p>
        <p className="tag greyText">@{props.tag}</p>
        <p className="location greyText">{props.location}</p>
      </ProfileDescriprion>
      <Statistics
        followers={props.followers}
        views={props.views}
        likes={props.likes}
      />
    </ProfileContainer>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
export default Profile;
