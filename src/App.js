import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friend-list/FriendList';
import Transactions from './components/transactions/Transactions.jsx';
import user from './database/user.json';
import data from './database/data.json';
import friends from './database/friends.json';
// import transactions from './database/transactions.json';
import styles from './App.module.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Profile</Link>
                        </li>
                        <li>
                            <Link to="/statistics">Statistics</Link>
                        </li>
                        <li>
                            <Link to="/friends">Friends</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Profile
                                username={user.username}
                                tag={user.tag}
                                location={user.location}
                                avatar={user.avatar}
                                stats={user.stats}
                            />
                        }
                    />
                    <Route />
                    <Route
                        path="/statistics"
                        element={
                            <Statistics title="Upload stats" stats={data} />
                        }
                    />
                    <Route
                        path="/friends"
                        element={<FriendList friends={friends} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
