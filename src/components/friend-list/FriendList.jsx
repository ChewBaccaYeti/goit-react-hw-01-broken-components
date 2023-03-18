import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
    const friendListItems = friends.map(function (item) {
        return (
            <FriendListItem
                key={item.id}
                isOnline={item.isOnline}
                avatar={item.avatar}
                name={item.name}
            />
        );
    });
    return <ul className={styles.FriendList}>{friendListItems}</ul>;
}

FriendList.propTypes = {};

export default FriendList;
