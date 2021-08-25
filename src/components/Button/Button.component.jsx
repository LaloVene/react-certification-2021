import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 1rem 0;
  background: ${(props) => props.theme.navColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.02), 0 0.8px 5.3px rgba(0, 0, 0, 0.028),
    0 1.5px 10px rgba(0, 0, 0, 0.035), 0 2.7px 17.9px rgba(0, 0, 0, 0.042),
    0 5px 33.4px rgba(0, 0, 0, 0.05), 0 12px 80px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.navColorDark};
    color: white;
  }
  &:active {
    background: ${(props) => props.theme.primaryTextColor};
    color: ${(props) => props.theme.primaryBackgroundColor};
  }
`;

function Input({ children, onClick }) {
  return (
    <Button onClick={onClick}>{children}</Button>
  );
}

export default Input;
