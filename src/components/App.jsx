import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import { GlobalStyle } from 'GlobalStyle';
import { Profile } from './Profile/Profile';
import { Layout } from './Layout/Layout.styled';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
