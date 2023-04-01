import PropTypes from 'prop-types';
import { Description, Image } from './ProfileDescription.styled';

export const ProfileDescription = ({
  user: { avatar, username, tag, location },
}) => {
  return (
    <Description>
      <Image src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </Description>
  );
};

ProfileDescription.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
