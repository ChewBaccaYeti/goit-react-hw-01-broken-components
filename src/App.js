import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import user from './database/user.json';
import data from './database/data.json';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.App}>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
        </div>
    );
}

export default App;
