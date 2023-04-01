import PropTypes from 'prop-types';
import { Stats, StatsItem } from './ProfileStats.styled';

export const ProfileStats = ({
  user: {
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Stats>
      <StatsItem>
        <span>Followers</span>
        <span>{followers}</span>
      </StatsItem>
      <StatsItem>
        <span>Views</span>
        <span>{views}</span>
      </StatsItem>
      <StatsItem>
        <span>Likes</span>
        <span>{likes}</span>
      </StatsItem>
    </Stats>
  );
};

ProfileStats.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
