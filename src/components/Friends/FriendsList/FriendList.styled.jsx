import styled from 'styled-components';
import FriendListItem from '../FriendsListItem/FriendListItem';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    border-radius: 10px;
    background-color: #ffffff;
`;

export default FriendListItem;
