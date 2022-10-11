import User from '../User/User';
import Statistics from '../Statistics/Statistics';
import Friends from '../Friends/Friends';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import transactionsData from '../JSON/transactions.json';
import statData from '../JSON/data.json';
import userData from '../JSON/user.json';
import friendsData from '../JSON/friends.json';

import { Main } from './App.styled';

export const App = () => {
  return (
    <Main>
      <User
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Statistics stats={statData} />
      <Friends props={friendsData} />
      <TransactionHistory data={transactionsData} />
    </Main>
  );
};
