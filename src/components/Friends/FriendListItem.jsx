import PropTypes from 'prop-types';
import styles from './FriendList.styled.jsx';
import FriendList from './FriendList.jsx';

function FriendListItem({ isOnline, avatar, name }) {
    return (
        <li className={styles.friendListItem}>
            <span className={isOnline ? styles.online : styles.offline} />
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <p>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};

export default FriendListItem;
