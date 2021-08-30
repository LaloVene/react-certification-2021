import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../utils/state/GlobalContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import loginApi from '../../utils/login.api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primaryBackgroundColor};
  padding: 1rem;
`;
const Heading = styled.h1`
  font-weight: lighter;
  font-size: 1.5rem;
  margin: 1rem 0 0 1rem;
  color: ${(props) => props.theme.primaryTextColor};
  margin: 2rem 0;
  text-transform: uppercase;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const { dispatch } = useContext(GlobalContext);
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const mockedUser = await loginApi(username, password);
      console.log(mockedUser);
      sessionStorage.setItem('userData', JSON.stringify(mockedUser));
      dispatch({ type: 'LOGIN', payload: mockedUser });
      history.push({
        pathname: '/',
        search: ``,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <Container>
      <Heading>Login</Heading>
      <Form onSubmit={onSubmit}>
        <Input
          type="name"
          label="Username"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          placeholder="····"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
      </Form>
    </Container>
  );
}

export default Login;
