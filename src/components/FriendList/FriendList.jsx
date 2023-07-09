import FriendListItem from 'components/FriendListItem/FriendListItem';
import ListContainer from './ListContainer.styled';
const FriendList = ({ friends }) => {
  return (
    <ListContainer>
      <FriendListItem friends={friends} />
    </ListContainer>
  );
};

export default FriendList;
