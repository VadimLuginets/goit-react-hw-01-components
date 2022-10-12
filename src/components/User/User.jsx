import PropTypes from 'prop-types';
import {
  Profile,
  Stats,
  Description,
  Text,
  Title,
  Img,
  Info,
  InfoText,
} from './User.styled';
export default function User({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <Profile>
      <Description>
        <Img src={avatar} alt="avatar"></Img>
        <Title>{username}</Title>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </Description>
      <Stats>
        <Info>
          <InfoText>Followers</InfoText>
          <InfoText>{followers}</InfoText>
        </Info>
        <Info>
          <InfoText>Views</InfoText>
          <InfoText>{views}</InfoText>
        </Info>
        <Info>
          <InfoText>Likes</InfoText>
          <InfoText>{likes}</InfoText>
        </Info>
      </Stats>
    </Profile>
  );
}
User.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
