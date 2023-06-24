import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const Tel = styled.span`
  color: gray;
`;

export const Button = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    outline: none;
    box-shadow: 0 4px 10px rgba(255, 56, 56, 1);
    border-color: #ff3838;
    background-color: #ff3838;
  }
`;
