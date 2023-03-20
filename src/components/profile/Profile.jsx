import PropTypes from 'prop-types';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStats } from './ProfileStats/ProfileStats';
import { UserProfile } from './Profile.styled';

export const Profile = ({ user }) => {
    return (
        <UserProfile key={user.tag}>
            <ProfileDescription user={user} />
            <ProfileStats user={user} />
        </UserProfile>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: {
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    },
};

export default Profile;
