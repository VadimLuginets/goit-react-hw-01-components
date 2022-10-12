import PropTypes from 'prop-types';
import { FriendsList } from './Friends.styled';
import { TiMediaRecord } from 'react-icons/ti';
import FriendsListItem from './FriendListItem';
export default function FriendList({ props }) {
  return (
    <FriendsList>
      {props.map(p => (
        <FriendsListItem
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
FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
