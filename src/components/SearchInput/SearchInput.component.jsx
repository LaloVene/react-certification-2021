import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 30px;
  margin: 0;
  margin-left: 1rem;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.primaryTextColor};
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
`;

function SearchInput({ handleChange }) {
  return <Input onChange={handleChange} placeholder="Search" type="text" />;
}

export default SearchInput;
