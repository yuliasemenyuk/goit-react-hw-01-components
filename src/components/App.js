import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistic/Statistic";
import FriendList from "./FriendList/FriendList";
import Transactions from "./Transactions/Transactions";

import user from "../json-data-files/user.json";
import statisticalData from "../json-data-files/data.json";
import friends from "../json-data-files/friends.json";
import transactions from "../json-data-files/transactions.json";

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <Transactions items={transactions} />
  </div>
);
export default App;
