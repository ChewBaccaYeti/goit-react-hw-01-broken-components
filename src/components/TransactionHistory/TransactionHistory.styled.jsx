import styled from 'styled-components';

export const Table = styled.table`
  width: 60%;
`;

export const Thead = styled.thead`
  background-color: #1eacbf;
  color: #ffffff;
`;

export const Tr = styled.tr`
  text-align: center;

  :nth-child(even) {
    background-color: #f1f1f1;
  }
`;

export const Th = styled.th`
  width: 20%;
  padding: 15px 0;
`;

export const Tbody = styled.thead`
  background-color: #ffffff;
  color: #5c5c5c;
`;

export const Td = styled.td`
  width: 20%;
  padding: 15px 0;
`;
