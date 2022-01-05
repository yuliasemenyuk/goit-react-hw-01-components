import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem/FriendIListItem";

import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
