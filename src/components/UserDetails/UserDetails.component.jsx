import React, { useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../utils/state/GlobalContext';

const Name = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.primaryTextColor};
`;
const Email = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${(props) => props.theme.secondaryTextColor};
`;
const Avatar = styled.img`
  border-radius: 100%;
  max-width: 5rem;
`;

function UserDetails() {
  const { state } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <Avatar
        src={state?.userData?.avatarUrl || require('../../img/default-user.png')}
        href="user profile image"
        data-testid="avatar"
      />
      <Name>{state?.userData?.name || 'Login'}</Name>
      <Email>{state?.userData?.email ||  'to improve the experience'}</Email>
    </React.Fragment>
  );
}

export default UserDetails;
