import PropTypes from 'prop-types';
import styles from './FriendList.styled.jsx';
import FriendListItem from './FriendListItem.jsx';

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
    return <ul className={styles.friendList}>{friendListItems}</ul>;
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ),
};

export default FriendList;
