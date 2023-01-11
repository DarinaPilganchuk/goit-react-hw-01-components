import React from 'react';
import user from './profile/user.json'
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import statisticalData from './statistics/data.json'
import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json'
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json'




  const App=() => {
    return ( <div>
        <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />;
    </div>
    );
};
export default App
