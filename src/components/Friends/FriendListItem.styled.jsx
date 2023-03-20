import styled from 'styled-components';

export const Status = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) => {
        return props.isOnline ? 'green' : 'red';
    }};
`;

export const Avatar = styled.img`
    width: 48px;
`;

export const Name = styled.p``;
