import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ isOnline, avatar, name }) {
    return (
        <li className={styles.friendListItem}>
            <span className={isOnline ? styles.online : styles.offline} />
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <p>{name}</p>
        </li>
    );
}

export default FriendListItem;
