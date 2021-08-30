import React from 'react';
import styled from 'styled-components';

const TagDiv = styled.div`
  background-color: hsl(0, 0%, 90%);
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  cursor: pointer;

  &:hover {
    background-color: hsl(0, 0%, 85%);
  }
`;

function Tag(props) {
  return <TagDiv data-testid="tag">{props.children}</TagDiv>;
}

export default Tag;
