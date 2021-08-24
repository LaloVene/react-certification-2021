import React from 'react';
import styled from 'styled-components';

const Name = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primaryTextColor};
`;
const Email = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${props => props.theme.secondaryTextColor};
`;
const Avatar = styled.img`
  border-radius: 100%;
  max-width: 5rem;
`;

function UserDetails() {
  return (
    <React.Fragment>
      <Avatar src={require('../../img/default-user.png')} href='user profile image' data-testid="avatar"/>
      <Name>{'Example Name'}</Name>
      <Email>{'example@example.com'}</Email>
    </React.Fragment>
  );
}

export default UserDetails;
