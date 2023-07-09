import PropTypes from 'prop-types';

import Status from './Status.styled';

const FriendListItem = ({ friends }) => {
  return friends.map(e => {
    return (
      <li className="item" key={e.id}>
        <Status status={e.isOnline}></Status>
        <img
          className="avatar"
          src={e.avatar}
          alt="User avatar"
          style={{ width: '48px' }}
        />
        <p className="name">{e.name}</p>
      </li>
    );
  });
};

FriendListItem.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
export default FriendListItem;
