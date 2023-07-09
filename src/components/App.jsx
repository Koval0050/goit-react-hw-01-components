import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import TaskContainer from './TaskContainer/TaskContainer';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        paddingTop: '100px',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <TaskContainer text={'1'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </TaskContainer>

      <TaskContainer text={'2'}>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </TaskContainer>

      <TaskContainer text={'3'}>
        <FriendList friends={friends} />
      </TaskContainer>

      <TaskContainer text={'4'}>
        <TransactionHistory transactions={transactions} />
      </TaskContainer>
    </div>
  );
};
