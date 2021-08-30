import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  margin: 0.5rem 0;
  padding: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.primaryBackgroundColor};
  }
`;
const Text = styled.p`
  margin: 0;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.secondaryTextColor};
  font-weight: lighter;
`;

function SideBarOption({ children, onClick, icon }) {
  const Icon = icon;
  const style = {
    color: 'hsl(0, 0%, 75%)',
  };

  return (
    <Element onClick={onClick}>
      <Icon style={style} />
      <Text>{children}</Text>
    </Element>
  );
}

export default SideBarOption;
