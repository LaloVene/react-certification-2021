import React from 'react';
import styled from 'styled-components';

const Toggle = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  border: none;
  color: palevioletred;
  font-size: 1.5rem;
  cursor: Pointer;
  display: flex;
  align-items: center;
`;

function ToggleButton(props) {
  const Icon = props.icon;

  return (
    <Toggle data-testid="toggle" onClick={props.onClick}>
      <Icon />
    </Toggle>
  );
}

export default ToggleButton;
