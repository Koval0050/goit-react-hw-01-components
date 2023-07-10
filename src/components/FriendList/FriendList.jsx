import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import ListContainer from './ListContainer.styled';
const FriendList = ({ friends }) => {
  return (
    <ListContainer>
      {friends.length > 0 &&
        friends.map(friend => <FriendListItem key={friend.id} {...friend} />)}
    </ListContainer>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default FriendList;
