import React from 'react';
import styled from 'styled-components';
import { IoEarth } from 'react-icons/io5';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.primaryTextColor};
  margin-top: 4rem;
`;

const Icon = styled(IoEarth)`
  font-size: 8rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
`;

const Message = styled.p`
  font-size: 1rem;
`;

function NotFoundPage({ title, message }) {
  return (
    <Container>
      <Icon icon={IoEarth} />
      <Title>{title || '404 Not Found'}</Title>
      <Message>{message || 'We weren´t able to find this content.'}</Message>
    </Container>
  );
}

export default NotFoundPage;
