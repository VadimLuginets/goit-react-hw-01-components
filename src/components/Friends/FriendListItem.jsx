import { Box, Status, Avatar, Name } from './Friends.styled';
export default function Friend({ avatar, isOnline, id, name }) {
  return (
    <Box key={id}>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Box>
  );
}
