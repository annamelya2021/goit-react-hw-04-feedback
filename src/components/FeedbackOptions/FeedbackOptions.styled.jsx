import styled from '@emotion/styled';

export const ListButton = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  width: auto;
  background-color: white;
  text-transform: uppercase;
  font-size: 15px;
  &:not(:last-child) {
    margin-right: 10px;
    &:active {
      background-color: rgb(0, 157, 255);
      color: white;
    }
  }
`;
