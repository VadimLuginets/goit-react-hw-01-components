import PropTypes from 'prop-types';
import { FriendsList, Box, Status, Avatar, Name } from './Friends.styled';
import { TiMediaRecord } from 'react-icons/ti';
export default function Friends({ props }) {
  return (
    <FriendsList>
      {props.map(p => (
        <Friend
          key={p.id}
          isOnline={
            p.isOnline ? (
              <TiMediaRecord
                color="green"
                size={'1.25em'}
                style={{ margin: '0 10px 0 0' }}
              />
            ) : (
              <TiMediaRecord
                color="red"
                size={'1.25em'}
                style={{ margin: '0 10px 0 0' }}
              />
            )
          }
          avatar={p.avatar}
          name={p.name}
        />
      ))}
    </FriendsList>
  );
}
function Friend({ avatar, isOnline, id, name }) {
  return (
    <Box key={id}>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avaar" />
      <Name>{name}</Name>
    </Box>
  );
}
Friends.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
