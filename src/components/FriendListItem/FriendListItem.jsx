import PropTypes from 'prop-types';

import Status from './Status.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <Status status={isOnline}></Status>
      <img
        className="avatar"
        src={avatar}
        alt="User avatar"
        style={{ width: '48px' }}
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
export default FriendListItem;
