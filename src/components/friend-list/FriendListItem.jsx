import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ isOnline, avatar, name, id }) {
    return (
        <li className={styles.friendListItem}>
            <span className={isOnline ? styles.online : styles.offline}></span>
        </li>
    );
}

export default FriendListItem;
